import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CountryList from "../for-all-form/CountryList";

const AddClient = () => {
  const { register, handleSubmit, errors } = useForm();

  const [client, setClient] = useState({});
  const [profileImg, setProfileImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/200px-Circle-icons-profile.svg.png"
  );

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const loadImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", data.photo[0]);
      const req = await fetch("http://localhost:3000/api/upload-img", {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "application/json;charset=utf-8",
        //   "Access-Control-Allow-Origin": "*",
        //   "Authorization":'Bearer' <token>
        // },
      });
      const { status, name } = await req.json();
      if (!status) {
        alert(
          "Sorry, something went wrong in uploading picture. Please try again!"
        );
        return;
      }
      const mergData = {
        ...data,
        photo: name,
        roles: [0],
      };

      await axios.post(
        // "https://techno-api.azurewebsites.net//api/Authorization/register",
        "http://localhost:3003/clients",
        mergData
      );
      e.target.reset();
      setProfileImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/200px-Circle-icons-profile.svg.png"
      );
    } catch (error) {
      console.log(error, "error in upload image");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Création Nouveau client</h1>
        </div>
        <div>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/png"
            name="photo"
            id="file"
            ref={register({
              required: "picture is required",
            })}
            onChange={(e) => loadImage(e)}
          />
          <img id="output" width="200" src={profileImg} alt="" />
          {errors.image ? <span> {errors.image.message}</span> : ""}
        </div>
        <div>
          Mr
          <input
            type="radio"
            id="mr"
            value="Mr"
            name="title"
            ref={register}
            onChange={(e) => onInputChange(e)}
          />
          Mme
          <input
            type="radio"
            id="mme"
            value="Mme"
            name="title"
            ref={register}
            onChange={(e) => onInputChange(e)}
          />
          Mlle
          <input
            type="radio"
            id="mlle"
            value="Mlle"
            name="title"
            ref={register}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div>
          <label htmlFor="FirstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Entrer votre Prénom"
            ref={register({
              required: "required",
              pattern: {
                value: /[a-zA-Z]+$/,
                message: "Invalid first name",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.firstName ? <span> {errors.firstName.message}</span> : ""}
        </div>
        <div>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastNname"
            name="lastName"
            placeholder="Entrer votre Nom"
            ref={register({
              required: "required",
              pattern: {
                value: [/^[A-Za-z]+$/i],
                message: "Invalid first name",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.lastName ? <span> {errors.lastName.message}</span> : ""}
        </div>
        <div>
          <label htmlFor="birthDate">Date de naissance</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            placeholder="Enter your date of birth"
            ref={register({
              required: "required",
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.birthDate ? <span> {errors.birthDate.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="phone">Numéro de téléphone</label>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Entrer votre Numéro de téléphone"
            ref={register({ required: "required" })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.phone ? <span> {errors.phone.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Entrer votre email"
            ref={register({
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid mail address",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.email ? <span> {errors.email.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="pass">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrer votre Mot de passe"
            onChange={(e) => onInputChange(e)}
            ref={register({
              required: "required",
              pattern: {
                value: "[/[a-z]/,/[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]",
              },
              minLength: {
                value: 8,
                message:
                  "must be 8 chars and include lower, upper, number, and special chars",
              },
            })}
          />
          {errors.password ? <span>{errors.password.message}</span> : null}
        </div>
        <div className="">
          <label htmlFor="street">Rue</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Entrer votre adresse"
            ref={register({
              required: "required",
              pattern: {
                message: "Invalid address",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.street ? <span> {errors.street.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="number">N°</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Numéro"
            ref={register({
              required: "required",
              pattern: {
                value: [/[a-z]/, /[A-Z]/, /[0-9]/],
                message: "Invalid number",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.number ? <span> {errors.number.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="box">boite</label>
          <input
            type="text"
            id="box"
            name="box"
            placeholder="Boite"
            ref={register({
              required: "required",
              pattern: {
                // value: "[/[a-z]/, /[A-Z]/, /[0-9]/]",
                message: "Invalid box number",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.box ? <span> {errors.box.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="zipCode">Code postal</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Code postal"
            ref={register({
              required: "required",
              pattern: {
                // value: /[0-9]/,
                message: "Invalid box number",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.zipCode ? <span> {errors.zipCode.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ville"
            ref={register({
              required: "required",
              pattern: {
                // value: "[/[a-z],[A-Z]/]",
                message: "Invalid city name",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.city ? <span> {errors.city.message}</span> : ""}
        </div>

        <div className="">
          <label htmlFor="state">Province</label>
          <select
            id="state"
            name="state"
            ref={register({
              required: "required",
            })}
            onChange={(e) => onInputChange(e)}
          >
            <option value="">Select...</option>
            <option value="bruxelles">Bruxelles</option>
            <option value="Hainaut">Hainaut</option>
            <option value="Anvers">Anvers</option>
            <option value="Flandre occidentale">Flande occidentale</option>
            <option value="Liège">Liège</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Namur">Namur</option>
            <option value="Brabant falmand">Brabant flamand</option>
            <option value="brabant wallon">Brabant wallon</option>
            <option value="Limbourg">Limbourg</option>
          </select>
        </div>
        <div className="">
          <CountryList
            ref={register({
              required: "required",
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.country ? <span> {errors.country.message}</span> : ""}
        </div>
        <div className="">
          <label htmlFor="registerNumber">Numéro de registre national</label>
          <input
            type="text"
            id="registerNumber"
            name="registerNumber"
            placeholder="Numéro de registre national"
            ref={register({
              required: "required",
              pattern: {
                value: /^\d{11}$/,
                message: "Invalid registry number",
              },
            })}
            onChange={(e) => onInputChange(e)}
          />
          {errors.registerNumber ? (
            <span> {errors.registerNumber.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default AddClient;
