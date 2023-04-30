import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';


const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    // const login = async () => {
    //     const domain = process.env.REACT_APP_DOMAIN;
    //     const audience = process.env.REACT_APP_AUDIENCE;
    //     const scope = "read:content";
    //     const clientId = process.env.REACT_APP_CLIENT_ID;
    //     const responseType = "code";
    //     const redirectUri = 'http://localhost:3000';

    //     const response = fetch(
    //         `https://${domain}/authorize?` +
    //         `audiene=${audience}&` +
    //         `scope=${scope}&` +
    //         `responseType=${responseType}&` +
    //         `client_id=${clientId}&` +
    //         `redirec_uri+${redirectUri}`, {
    //         redirect: "manual"
    //     }
    //     )
    //     window.location.replace(response.url);
    // }
    return (
        <>
            {/* <button onClick={() => login()} className="user-avatar"> */}
            <button onClick={() => loginWithRedirect()} className="user-avatar">
                <AiOutlineUser size='1.5rem' className='' />
            </button>
            {/* <Link to={'/login'} className='user'>
                {loggedIn ? <FaUser /> : "LogeIn"}
                <FaUser size='1.5rem' className='' />
            </Link> */}
        </>
    )
}
export default LoginButton;