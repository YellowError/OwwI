import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EndpointType from "../../common/endpoint-type";
import FloatingInput from "../for-all-form/FloatingInput";

const FormConnection = ({ title, endpoint, onLoginSucess, onNotification }) => {
  const url = `http://localhost:8000/${endpoint}`;
  // const url = `http://${process.env.DB_HOST}:${process.env.PORT}/${endpoint}`;
  const router = useRouter();

  const manageValues = async (values) => {
    let userRaw = null;
    let user = null;

    console.log(url);
    try {
      userRaw = await fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!userRaw.ok) {
        // bad request
        console.log("bad");
        onNotification(await userRaw.text());
      } else {
        // good request
        console.log("good");
        if (endpoint == EndpointType.Login) {
          user = await userRaw.json();
          localStorage.setItem("req-token", user.accessToken);
          onLoginSucess(user.accessToken);
          router.push("/");
        } else if (endpoint == EndpointType.Register) {
          router.push("/login");
        }

        document.querySelector(".form-loginlogout").reset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    setValues({ email, password });
  };

  const [values, setValues] = useState(null);

  useEffect(() => {
    if (!values) return;

    manageValues(values);
  }, [values]);

  return (
    <>
      <img src={"/images/logoLogin.png"} className="mx-auto w-32 mb-6 mt-10" />
      <br />
      <h1 className="text-center text-lg">{title}</h1>
      <form
        className="form-loginlogout container mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <FloatingInput
            type="text"
            htmlForAndId="email"
            label="Email"
            isRequired={true}
          />
          {/* <label htmlFor="email">Email Adress</label>
          <input name="email" type="email" required></input> */}
        </div>
        <div className="mt-3">
          <FloatingInput
            type="password"
            htmlForAndId="password"
            label="Password"
            isRequired={true}
          />
          {/* <label htmlFor="password">Password</label>
          <input name="password" type="password" required></input> */}
        </div>
        <div className="flex justify-around">
          <button className="btnGreen btn w-36" type="submit">
            {title}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormConnection;
