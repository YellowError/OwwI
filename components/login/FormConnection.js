import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EndpointType from "../../common/endpoint-type";
import FloatingInput from "../../components/for-all-form/FloatingInput";

const FormConnection = ({ title, endpoint, onLoginSucess, onNotification, requestServer }) => {
  const router = useRouter();

  const manageValues = async(values) => {

    let response = await requestServer('post', `/api/authorization/${endpoint}`, JSON.stringify(values));
    if (endpoint == EndpointType.Login) {
      // • with DB Json
      // localStorage.setItem("req-token", user.accessToken);
      // onLoginSucess(user.accessToken);
      // • Live project
      localStorage.setItem("req-token", response.token);
      localStorage.setItem("req-userId", response.userId);
      localStorage.setItem("req-roles", response.roles);
      onLoginSucess(response);
      router.push("/dashboard");
    } else if (endpoint == EndpointType.Register) {
      router.push("/login");
    }
  
    document.querySelector(".form-loginlogout").reset();
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

  useEffect(async () => {
    if (!values) return;

    await manageValues(values);
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
