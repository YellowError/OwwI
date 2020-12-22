import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EndpointType from "../../common/endpoint-type";
import FloatingInput from "../../components/for-all-form/FloatingInput";

const FormConnection = ({ title, endpoint, onLoginSucess, onNotification }) => {
  const router = useRouter();
  const apiRequestLogin = `https://techno-api.azurewebsites.net/api/authorization/${endpoint}`;

  const manageValues = async (values) => {
    let userRaw = null;
    let user = null;

    try {
      userRaw = await fetch(apiRequestLogin, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!userRaw.ok) {
        // bad request
        // console.log("bad");
        onNotification(await userRaw.text());
      } else {
        // good request
        // console.log("good");
        if (endpoint == EndpointType.Login) {
          user = await userRaw.json();
          // • with DB Json
          // localStorage.setItem("req-token", user.accessToken);
          // onLoginSucess(user.accessToken);
          // • Live project
          localStorage.setItem("req-token", user.token);
          localStorage.setItem("req-userId", user.userId);
          onLoginSucess(user);
          router.push("/dashboard");
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
