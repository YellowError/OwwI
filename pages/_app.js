import "../styles/global.css";
import { useState, useEffect } from "react";
import Notification from "../components/Notification";

const App = ({ Component, pageProps }) => {
  // nb : change for .env at some point
  const apiRequestUser = `https://techno-api.azurewebsites.net/api/authorization/get-user`;

  // Token
  // nb : didn't use hooks on purpose (could infinite loop)
  let token;
  let userId;

  const setToken = (accessToken) => {
    token = accessToken;
  };

  const setUserId = (accessUserId) => {
    userId = accessUserId;
  };

  const setTokenAndUserId = (request) => {
    token = request.token;
    userId = request.userId;
    // console.log("Token : " + token);
    // console.log("User ID : " + userId);
  };

  try {
    if (!token && !userId) {
      setToken(localStorage.getItem("req-token"));
      setUserId(localStorage.getItem("req-userId"));
    }
  } catch (e) {
    // console.error("Couldn't get Token & UserID in Local Storage.");
  }

  // User
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) return;

    if (token && userId) getUserFromServer();
  }, [token, userId, user]);

  const getUserFromServer = async () => {
    try {
      let userRaw = await fetch(`${apiRequestUser}?id=${userId}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userRaw.ok) {
        // bad request
        onNotification(await userRaw.text());
      } else {
        // good request
        setUser(await userRaw.json());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = () => {
    try {
      localStorage.removeItem("req-token");
      localStorage.removeItem("req-userId");
      setToken(null);
      setUserId(null);
      setUser(null);
    } catch (e) {
      console.error("Couldn't Logout");
    }
  };

  // Notification
  const [message, setMessage] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const onNotification = (message) => {
    setMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      <div>{showNotification ? <Notification message={message} /> : ""}</div>
      {/* Every pages */}
      <Component
        {...pageProps}
        user={user}
        onLoginSucess={setTokenAndUserId}
        onLogout={onLogout}
        onNotification={onNotification}
      />
    </>
  );
};

export default App;
