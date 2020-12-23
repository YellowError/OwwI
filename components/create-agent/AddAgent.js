import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CountryList from "../for-all-form/CountryList";

const AddAgent = () => {
  const { register, handleSubmit, errors } = useForm();

  const [agent, setAgent] = useState({});
  const [profileImg, setProfileImage] = useState("/images/addAgentPhoto.svg");
  const [isActive, setIsActive] = useState(false);
  const onInputChange = (e) => {
    setAgent({ ...agent, [e.target.name]: e.target.value });
    if (e.target.value) {
      setIsActive(true);
    } else if (isActive && !e.target.value) {
      setIsActive(false);
    }
  };
  const [value, setValue] = useState(false);
  const loadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    setProfileImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
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
        photo: await convertBase64(data.photo[0]),
        roles: [1],
      };

      await axios.post(
        "https://techno-api.azurewebsites.net/api/Authorization/register",
        // "http://localhost:3003/agents",
        mergData
      );
      e.target.reset();
      setProfileImage("/images/addAgentPhoto.svg");
    } catch (error) {
      console.log(error, "error in upload image");
    }
  };
  return (
    <div className="container mx-auto">
      <form
        className=" flex flex-wrap flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-center font-light">Création Nouveau Agent</h1>
        </div>
        <div className="flex flex-col items-center my-5">
          <img id="output" width="200" src={profileImg} alt="" />
          <input
            className="py-2"
            type="file"
            accept="image/gif, image/jpeg, image/png"
            name="photo"
            id="file"
            ref={register({
              required: "picture is required",
            })}
            onChange={(e) => loadImage(e)}
          />

          {errors.photo ? <span> {errors.photo.message}</span> : ""}
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:mr-3">
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                id="codeEmploye"
                name="codeEmploye"
                ref={register({
                  required: "Code employe is required",
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                htmlFor="codeEmploye"
                className={`${isActive ? "full" : ""} md:text-lg`}
              >
                Code employé
              </label>
              {errors.codeEmploye ? (
                <span> {errors.codeEmploye.message}</span>
              ) : (
                ""
              )}
            </div>
            <div className="floatLabel w-96 lg:mt-2">
              <input
                className={isActive ? "inputFull" : ""}
                id="secteur"
                name="secteur"
                ref={register({
                  required: "Secteur is required",
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="secteur"
              >
                secteur
              </label>
              {errors.secteur ? <span> {errors.secteur.message}</span> : ""}
            </div>
            <div className="flex items-center justify-center m-6">
              <label htmlFor="isAdmin">Statut Admin</label>
              <input
                checked={value}
                name="isAdmin"
                className="inputCheckBoxBtn"
                id="isAdmin"
                type="checkbox"
                ref={register}
                onChange={() => setValue(!value)}
              />
              <label
                className={
                  value ? "inputSwitchLabel switchFalse" : "inputSwitchLabel"
                }
                htmlFor="isAdmin"
              >
                <span className="switchBtn" />
              </label>
            </div>
            <div className="btnRadio m-6 text-center">
              <div>
                <input
                  type="radio"
                  id="mr"
                  name="title"
                  value="Mr"
                  ref={register}
                />
                <label className="ml-2 mr-4" htmlFor="mr">
                  Mr
                </label>

                <input
                  type="radio"
                  id="mme"
                  name="title"
                  value="Mme"
                  ref={register}
                />
                <label className="ml-2 mr-4" htmlFor="mme">
                  Mme
                </label>

                <input
                  type="radio"
                  id="mlle"
                  name="title"
                  value="Mlle"
                  ref={register}
                />
                <label className="ml-2 mr-4" htmlFor="mlle">
                  Mlle
                </label>
              </div>
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="firstName"
                name="firstName"
                ref={register({
                  required: "required",
                  pattern: {
                    value: /[a-zA-Z]+$/,
                    message: "Invalid first name",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="FirstName"
              >
                Prénom
              </label>
              {errors.firstName ? <span> {errors.firstName.message}</span> : ""}
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="lastNname"
                name="lastName"
                ref={register({
                  required: "required",
                  pattern: {
                    value: [/^[A-Za-z]+$/i],
                    message: "Invalid first name",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="lastName"
              >
                Nom
              </label>
              {errors.lastName ? <span> {errors.lastName.message}</span> : ""}
            </div>
            <div className="flex flex-col ml-2">
              <label className="my-2" htmlFor="birthDate">
                Date de naissance
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                className="rounded-md w-96 py-2 pl-2 borderUnderDropdownListing textColorLightGray"
                ref={register({
                  required: "required",
                })}
                onChange={(e) => onInputChange(e)}
              />
              {errors.birthDate ? <span> {errors.birthDate.message}</span> : ""}
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="phone"
                name="phone"
                ref={register({ required: "required" })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                htmlFor="phone"
                className={`${isActive ? "full" : ""} md:text-lg`}
              >
                Numéro de téléphone
              </label>
              {errors.phone ? <span> {errors.phone.message}</span> : ""}
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="email"
                name="email"
                ref={register({
                  required: "required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid mail address",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="email"
              >
                Email
              </label>
              {errors.email ? <span> {errors.email.message}</span> : ""}
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="password"
                id="password"
                name="password"
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
              <label
                htmlFor="pass"
                className={`${isActive ? "full" : ""} md:text-lg`}
              >
                Mot de passe
              </label>
              {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
          </div>
          <div className="lg:ml-3">
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="street"
                name="street"
                ref={register({
                  required: "required",
                  pattern: {
                    message: "Invalid address",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                htmlFor="street"
                className={`${isActive ? "full" : ""} md:text-lg`}
              >
                Rue
              </label>
              {errors.street ? <span> {errors.street.message}</span> : ""}
            </div>
            <div className="flex">
              <div className="floatLabel w-24">
                <input
                  className={isActive ? "inputFull" : ""}
                  type="text"
                  id="number"
                  name="number"
                  ref={register({
                    required: "required",
                    pattern: {
                      value: [/[a-z]/, /[A-Z]/, /[0-9]/],
                      message: "Invalid number",
                    },
                  })}
                  onChange={(e) => onInputChange(e)}
                />
                <label
                  className={`${isActive ? "full" : ""} md:text-lg`}
                  htmlFor="number"
                >
                  N°
                </label>
                {errors.number ? <span> {errors.number.message}</span> : ""}
              </div>
              <div className="floatLabel w-32">
                <input
                  className={isActive ? "inputFull" : ""}
                  type="text"
                  id="box"
                  name="box"
                  ref={register({
                    required: "required",
                    pattern: {
                      // value: "[/[a-z]/, /[A-Z]/, /[0-9]/]",
                      message: "Invalid box number",
                    },
                  })}
                  onChange={(e) => onInputChange(e)}
                />
                <label
                  className={`${isActive ? "full" : ""} md:text-lg`}
                  htmlFor="box"
                >
                  boite
                </label>
                {errors.box ? <span> {errors.box.message}</span> : ""}
              </div>
              <div className="floatLabel w-32">
                <input
                  className={`${isActive ? "inputFull" : ""}`}
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  ref={register({
                    required: "required",
                    pattern: {
                      // value: /[0-9]/,
                      message: "Invalid box number",
                    },
                  })}
                  onChange={(e) => onInputChange(e)}
                />
                <label
                  htmlFor="zipCode"
                  className={`${isActive ? "full" : ""} md:text-lg`}
                >
                  Code postal
                </label>
                {errors.zipCode ? <span> {errors.zipCode.message}</span> : ""}
              </div>
            </div>
            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="city"
                name="city"
                ref={register({
                  required: "required",
                  pattern: {
                    // value: "[/[a-z],[A-Z]/]",
                    message: "Invalid city name",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="city"
              >
                Ville
              </label>
              {errors.city ? <span> {errors.city.message}</span> : ""}
            </div>

            <div className="flex flex-col ml-2 lg:mt-6">
              <label htmlFor="state" className="py-1">
                Province
              </label>
              <select
                className="rounded-md w-96 py-3 text-center borderUnderDropdownListing textColorLightGray"
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

            <CountryList
              ref={register({
                required: "required",
              })}
              onChange={(e) => onInputChange(e)}
            />
            {errors.country ? <span> {errors.country.message}</span> : ""}

            <div className="floatLabel w-96">
              <input
                className={isActive ? "inputFull" : ""}
                type="text"
                id="registerNumber"
                name="registerNumber"
                ref={register({
                  required: "required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Invalid registry number",
                  },
                })}
                onChange={(e) => onInputChange(e)}
              />
              <label
                className={`${isActive ? "full" : ""} md:text-lg`}
                htmlFor="registerNumber"
              >
                Numéro de registre national
              </label>
              {errors.registerNumber ? (
                <span> {errors.registerNumber.message}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center m-6">
          <button className="btn btnBlue w-32 text-center" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddAgent;
