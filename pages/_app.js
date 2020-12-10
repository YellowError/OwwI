import '../styles/global.css';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Notification from '../components/Notification';

const App = ({ Component, pageProps }) => {

	// nb : change for .env at some point
	const baseFetchUrl = "http://localhost:8000/users";

	// Token
	// nb : didn't use hooks on purpose (could infinite loop)
	let token;

	const setToken = (accessToken) => {
		token = accessToken;
	};

	try {
		if (!token)
			setToken(localStorage.getItem("req-token"));
	} catch(e) {
		// console.log(e);
	}
		
	// User
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (user)
			return;
		
		if (token)
			getUserFromServer();
	}, [token, user]);

	const getUserFromServer = async () => {
		try {
			let userRaw = await fetch(`${baseFetchUrl}/${jwtDecode(token).sub}`,
			{
				method: 'get',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Autorization: `Bearer ${token}`
				}
			});
			
			if (!userRaw.ok) {
				// bad request
				onNotification(await userRaw.text());
			} else {
				// good request
				setUser(await userRaw.json());
			}
		} catch(e) {
			console.log(e);
		}
	}

	const onLogout = () => {
		localStorage.removeItem("req-token");
		setToken(null);
		setUser(null);
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
			<Component {...pageProps} user={user} onLoginSucess={setToken} onLogout={onLogout} onNotification={onNotification} />
		</>
	);
};

export default App;