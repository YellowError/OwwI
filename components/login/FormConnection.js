import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EndpointType from '../../common/endpoint-type';

const FormConnection = ({ title, endpoint, onLoginSucess, onNotification }) => {

    const url = `http://localhost:8000/${endpoint}`;
    // const url = `http://${process.env.DB_HOST}:${process.env.PORT}/${endpoint}`;
    const router = useRouter();

    const manageValues = async (values) => {
        let userRaw = null;
        let user = null;

        console.log(url);
        try {
            userRaw = await fetch(url,
            {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
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
                    router.push('/');
                } else if (endpoint == EndpointType.Register) {
                    router.push('/login');
                }

                document.querySelector(".form-loginlogout").reset();
            }

        } catch (e) {
            console.error(e);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { 
            email: {value: email}, 
            password: {value: password} 
        } = e.target.elements;
        setValues({email, password});
    }

    const [values, setValues] = useState(null);

    useEffect(() => {
        if (!values)
            return;

        manageValues(values);
    }, [values]);

    return (
    <>
        <br/>
        <h2>{title}</h2>
        <br/>
        <form className="form-loginlogout" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Adress</label>
                <input name="email" type="email" required></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" required></input>
            </div>
            <div>
                <button type="submit">{title}</button>
            </div>
        </form>
    </>
    );
};

export default FormConnection;