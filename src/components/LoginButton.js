import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from 'react-icons/fa';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (

        <button onClick={() => loginWithRedirect()} className="user-avatar">
            <FaUser size='1.5rem' className='' />
        </button>
    )
}
export default LoginButton;