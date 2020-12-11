import React from 'react';
import Link from 'next/link';

const Navbar = ({ user, onLogout }) => {

	return (
	<>
        <br/>

        <Link href="/">
            <a className="btn btnGreen">Home</a>
        </Link>

		<br/>

		<Link href="/register">
			<a className="btn btnGreen">Register</a>
		</Link>

		<br/>

		<Link href="/login">
			<a className="btn btnGreen">Login</a>
		</Link>

        <br/>

        <Link href="/test">
            <a className="btn btnGreen">Test</a>
        </Link>

		<br/>

		<Link href="/about">
			<a className="btn btnGreen">About</a>
		</Link>

		<br/>

		<Link href="/contact">
			<a className="btn btnGreen">Contact</a>
		</Link>

        <br/>

        <Link href="/create-agent">
            <a className="btn btnGreen">Create-Agent</a>
        </Link>

        <br/>

        <Link href="/create-client/IciSeraPasseIdAgent">
            <a className="btn btnGreen">Create-Client</a>
        </Link>

        <br/>

        <Link href="/create-estimation/IciDevraEtrePasseIdClient">
            <a className="btn btnGreen">Create-Estimation</a>
        </Link>

        <br/>

        <Link href="/create-password">
            <a className="btn btnGreen">Create-Password</a>
        </Link>

        <br></br>

        <Link href="/dashboard">
            <a className="btn btnGreen">Dashboard</a>
        </Link>

        <br/>

        <Link href="/details-estimation/IciDevraEtrePasseIdEstimation">
            <a className="btn btnGreen">Details-Estimation</a>
        </Link>

        <br/>

        <Link href="/edit-form">
            <a className="btn btnGreen">Edit-Form</a>
        </Link>

        <br/>

        <Link href="/edit-profile/IciDevraiEtreIdUser">
            <a className="btn btnGreen">Edit-Profile</a>
        </Link>

        <br/>

        <Link href="/forget-password">
            <a className="btn btnGreen">Forget-Password</a>
        </Link>

        <br></br>

        <Link href="/homepage-admin">
            <a className="btn btnGreen">Homepage-Admin</a>
        </Link>

        <br/>

        <Link href="/homepage-agent">
            <a className="btn btnGreen">Homepage-Agent</a>
        </Link>

        <br/>

        <Link href="/homepage-client">
            <a className="btn btnGreen">Homepage-Client</a>
        </Link>

        <br/>

        <Link href="/listing">
            <a className="btn btnGreen">Listing</a>
        </Link>

        <br/>

        <Link href="/principal">
            <a className="btn btnGreen">Principal</a>
        </Link>

        <br></br>

        <Link href="/privacy">
            <a className="btn btnGreen">Privacy</a>
        </Link>

        <br/>

        <Link href="/profile/IciDevraEtrePasseIdUser">
            <a className="btn btnGreen">Profile</a>
        </Link>

        <br/>
        <br/>

		<hr/>

		{ user ? (
			<>				
				<button className="btn btnRed" type="button" onClick={onLogout}>Logout</button>
                <span> Welcome {user.email}</span>

                <hr/>
			</>
		) : (
			<>
				
			</>
		)}
	</>
	);
};

export default Navbar;
