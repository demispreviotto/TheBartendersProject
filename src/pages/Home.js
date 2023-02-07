import React from "react";
import './Home.css'
import Hero from "../components/Hero";
import HeroCocktails from "../components/CocktailsSlider";

const Home = () => {
    return (
        <section className="section home">
            <Hero/>
            <HeroCocktails/>
        </section>
    )
}

export default Home;