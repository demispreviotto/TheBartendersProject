import React from "react";
import './Home.css'
import Hero from "../components/Hero";
import CocktailsSlider from "../components/CocktailsSlider";

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <section className="section">
                <CocktailsSlider />
            </section>
        </section>
    )
}

export default Home;