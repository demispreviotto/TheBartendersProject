import React from "react";
import './Home.css'
import Hero from "../components/Hero";
import CocktailsSlider from "../components/CocktailsSlider";

const Home = () => {
    return (
        <section className="section home">
            <Hero/>
            <CocktailsSlider/>
        </section>
    )
}

export default Home;