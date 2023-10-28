import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import Favorites from "./Favorites";
import CocktailsSlider from "./CocktailsSlider";

const Profile = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />
    }
    return (
        isAuthenticated && (
            <section className="section">
                <div>
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