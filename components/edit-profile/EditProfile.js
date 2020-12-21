import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import db from "../../db.json";
import CountryList from "../for-all-form/CountryList";
import axios from "axios";

const EditClient = () => {
    const router = useRouter();
    const { idClient: pid } = router.query;
    // const [token, setToken] = useState("");
    const { register, handleSubmit, errors } = useForm();
    const [client, setClient] = useState({
        assignationAgent: "",
        title: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        phone: "",
        email: "",
        password: "",
        street: "",
        number: "",
        box: "",
        zipCode: "",
        city: "",
        state: "",
        country: "",
        photo: "",
        registerNumber: "",
    });

    // useEffect(() => {
    //   const localToken = localStorage.getItem("token");
    //   if (!localToken) {
    //     alert("Sorry, something went wrong! Please login first.");
    //     router.replace("/login");
    //   }
    //   setToken(localToken);
    // }, []);

    const [profileImg, setProfileImage] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/200px-Circle-icons-profile.svg.png"
    );

    const [newImage, setNewImage] = useState(null);
    const {
        assignationAgent,
        title,
        firstName,
        lastName,
        birthDate,
        phone,
        email,
        password,
        street,
        number,
        box,
        zipCode,
        city,
        state,
        photo,
        country,
        registerNumber,
    } = client;

    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const loadImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNewImage({
                    img: e.target.files[0],
                    imgResult: reader.result,
                });
            }
        };
        if (e.target.files) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onSubmit = async () => {
        try {
            if (newImage && newImage.img && newImage.imgResult) {
                const formData = new FormData();
                formData.append("picture", newImage.img);
                const req = await fetch("/api/upload-img", {
                    method: "POST",
                    body: formData,
                });
                const { status, name } = await req.json();
                if (!status) {
                    alert(
                        "Sorry, something went wrong in uploading picture. Please try again!"
                    );
                    return;
                }
                const mergData = {
                    ...client,
                    photo: name,
                    roles: [0],
                };
                await axios.put(
                    // `https://techno-api.azurewebsites.net/api/Authorization/update-user/`,
                    `http://localhost:3001/clients/${pid}`,

                    mergData,
                    {
                        headers: {
                            // Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } else {
                await axios.put(
                    // `https://techno-api.azurewebsites.net/api/Authorization/update-user/`,
                    `http://localhost:3001/clients/${pid}`,
                    client,
                    {
                        headers: {
                            // Authorization: `Bearer ${token}`
                        },
                    }
                );
            }
        } catch (error) {
            console.log(error, " error in update client");
        }
    };

    useEffect(() => {
        if (!pid) return;
        const clients = db.clients;
        if (!clients || clients.length < 1) return;
        const foundClient = clients.find((o) => o.id == pid);
        if (!foundClient) return;
        setClient({ ...foundClient });
    }, [pid]);

    const deleteClient = async () => {
        try {
            await axios.delete(
                // `https://techno-api.azurewebsites.net/api/Authorization/delete-user/`,
                `http://localhost:3001/clients/${pid}`,
                {
                    // headers: {
                    //     Authorization: `Bearer ${token}`,
                    // },
                }
            );
            router.replace("/");
        } catch (error) {
            console.log(error, " error in delete client");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Profile des Clients</h1>
                </div>
                <div>
                    <input
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        name="photo"
                        id="file"
                        ref={register}
                        onChange={(e) => loadImage(e)}
                    />
                    <img
                        alt=""
                        d="output"
                        width="200"
                        src={
                            !photo && (!newImage || !newImage?.img || !newImage?.imgResult)
                                ? profileImg
                                : newImage && newImage?.img && newImage?.imgResult
                                    ? newImage?.imgResult
                                    : (process.env.PUBLIC_URL, photo)
                        }
                    />
                    {errors.photo ? <span> {errors.photo.message}</span> : ""}
                </div>
                <div className="">
                    <label htmlFor="assignationAgent">assignation de l'agent</label>
                    <select
                        id="assignationAgent"
                        name="assignationAgent"
                        value={assignationAgent}
                        ref={register({
                            required: "Title is required",
                        })}
                        onChange={(e) => onInputChange(e)}
                    >
                        <option>Lier à agent</option>
                        <option value="agent1">Agent 1</option>
                        <option value="agent2">Agent 2</option>
                        <option value="agent3">Agent 3</option>
                    </select>
                </div>
                {/* <div className="">
          <label htmlFor="title">Titre.</label>
          <select
            id="title"
            name="title"
            value={title}
            ref={register({
              required: "Title is required",
            })}
            onChange={(e) => onInputChange(e)}
          >
            <option value="">Select...</option>
            <option value="mr">Mr</option>
            <option value="mme ">Mme</option>
            <option value="mlle">Mlle</option>
          </select>
        </div> */}
                <div>
                    Mr
          <input
                        id="mr"
                        value="Mr"
                        type="radio"
                        name="title"
                        ref={register}
                        onChange={(e) => onInputChange(e)}
                    />
          Mme
          <input
                        id="mme"
                        type="radio"
                        value="Mme"
                        name="title"
                        ref={register}
                        onChange={(e) => onInputChange(e)}
                    />
          Mlle
          <input
                        id="mlle"
                        type="radio"
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
                        value={firstName}
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
                        value={lastName}
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
                        value={birthDate}
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
                        type="phone"
                        id="phone"
                        name="phone"
                        value={phone}
                        placeholder="Entrer votre Numéro de téléphone"
                        ref={register({
                            required: "required",
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Invalid phone number",
                            },
                        })}
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
                        value={email}
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
                        value={password}
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
                        value={street}
                        placeholder="Entrer votre adresse"
                        ref={register({
                            required: "required",
                            pattern: {
                                // value: "[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]",
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
                        value={number}
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
                        value={box}
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
                        value={zipCode}
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
                        value={city}
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
                        value={state}
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
                        value={country}
                        onChange={(e) => onInputChange(e)}
                    />
                    {errors.country ? <span> {errors.country.message}</span> : ""}
                </div>

                <div className="">
                    <label htmlFor="nationalId">Numéro de registre national</label>
                    <input
                        type="text"
                        id="registerNumber"
                        name="registerNumber"
                        value={registerNumber}
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
                    <button type="button" onClick={deleteClient}>
                        Supprimer
          </button>
                    <button type="submit" onClick={onSubmit}>
                        Modifier
          </button>
                </div>
            </form>
        </div>
    );
};

export default EditClient;
