import '../styles/global.css';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';

const App = ({ Component, pageProps }) => {

	// nb : change for .env at some point
	const baseUrl = `https://techno-api.azurewebsites.net`;
	
	// Token
	// nb : didn't use hooks on purpose (could infinite loop)
	let token;
	let userId;
	let roles;

	const setToken = (accessToken) => {
		token = accessToken;
	};

	const setUserId = (accessUserId) => {
		userId = accessUserId;
	};

	const setRoles = (accessRoles) => {
		roles = accessRoles;
	};

	const setEverything = (request) => {
		token = request.token;
		userId = request.userId;
		roles = request.roles.toString();
	};

	try {
		if (!token && !userId && !roles) {
			setToken(localStorage.getItem("req-token"));
			setUserId(localStorage.getItem("req-userId"));
			setRoles(localStorage.getItem("req-roles"));
		}
	} catch(e) {
		// console.error("Couldn't get Token & UserID in Local Storage.");
	}
		
	// User
	const [user, setUser] = useState(null);

	useEffect(async () => {
		if (user)
			return;

		if (token && userId && roles) {
			let userTmp = await requestServer('get', `/api/authorization/get-user?id=${userId}`);
			let userDone = userTmp.user;
			userDone.roles = roles.split(",");
			userDone.address = userTmp.address;
			setUser(userDone);
		}
			
	}, [token, userId, roles, user]);
	
	/**
	 * 
	 * @param {String} requestMethod	The method (e.g. get/post)
	 * @param {String} apiUrl 			The url from the backend's Swagger
	 * @param {Object} body 			In case of method Post, the body to send
	 */
	const requestServer = async (requestMethod, apiUrl, body = null) => {
		try {
			const header = {
				method: requestMethod,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			};

			if (requestMethod == "post" && body)
				header.body = body;

			let userRaw = await fetch(`${baseUrl}${apiUrl}`, header);
			
			if (!userRaw.ok) {
				// bad request
				if (userRaw.status == 401)
					onLogout();
				else
					onNotification(await userRaw.text());
			} else {
				// good request				
				return (await userRaw.json());
			}
		} catch(e) {
			console.log(e);
		}
	}

	const onLogout = () => {
		try {
			localStorage.removeItem("req-token");
			localStorage.removeItem("req-userId");
			localStorage.removeItem("req-roles");
			setToken(null);
			setUserId(null);
			setRoles(null);
			setUser(null);
		} catch(e) {
			console.error("Couldn't Logout");
		}
	}

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
			<div>
				{showNotification ? (
					<Notification message={message} />
				) : (
					''
				)}
			</div>
			{/* Every pages */}
			<Component {...pageProps} user={user} onLoginSucess={setEverything} onLogout={onLogout} onNotification={onNotification} requestServer={requestServer} />
		</>
	);
};

export default App;
