import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineUser } from 'react-icons/ai';


const ButtonLogin = () => {

    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <button onClick={() => loginWithRedirect()} className="user-avatar">
                <AiOutlineUser size='1.5rem' className='' />
            </button>
        </>
    )
}
export default ButtonLogin;