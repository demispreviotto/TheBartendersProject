import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-info">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus ab molestias doloremque dolorum illum harum saepe sint nihil officia. Beatae inventore est ea, cum ipsum saepe doloremque illum facere.</p>
                <Link to={'/recipes'} className="btn primary-btn">start now</Link>
            </article>
        </section>
    )
}
export default Hero;