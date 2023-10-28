import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonLogout = () => {
    const { logout } = useAuth0();
    return (
        <button className='btn primary-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >Logout
        </button>
    )
}

export default ButtonLogout;