import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import LogoutButton from "./LogoutButton";
import Favorites from "./Favorites";
import CocktailsSlider from "./CocktailsSlider";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user)
    if (isLoading) {
        return <Loading />
    }
    return (
        isAuthenticated && (
            <section className="section">
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    {/* <p>Email:{user.email}</p> */}
                    <LogoutButton />
                </div>
                <div>
                    <h3>Favorites</h3>
                    <Favorites />
                </div>
                <div>
                    <h3>Last Order</h3>
                    <CocktailsSlider />
                </div>
            </section>
        )
    );
};

export default Profile;