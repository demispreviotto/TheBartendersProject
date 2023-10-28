import React from "react";
import './About.css';
import AboutImg1 from "../assets/img/about-img1.jpg";

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="section-title">About</h1>
                <div className="about-container">
                    <div>

                        <p>
                            Welcome to The Bartenders Project
                            <br />
                            We are passionate about cocktails and bringing the joy of mixology to your home. Our mission is to provide you with an extensive collection of cocktail recipes and convenient access to high-quality ingredients, enabling you to create delicious and refreshing drinks right in your own kitchen.
                            <br />
                            At Cocktail Delights, we understand that making cocktails can be an art form, and we strive to make it accessible to both beginners and enthusiasts alike. Whether you're new to mixology or a seasoned cocktail connoisseur, our platform is designed to inspire and empower you to explore the world of cocktails.
                            <br />
                            Our website features a vast collection of handcrafted cocktail recipes from classics to modern creations. Each recipe is carefully curated, complete with detailed instructions, ingredient lists, and measurements to ensure you achieve the perfect balance of flavors in every sip. We regularly update our recipe library, so you'll always find something exciting and new to try.
                            <br />
                            To make your cocktail-making experience even more convenient, we offer a curated shop where you can find a wide range of premium ingredients, including spirits, mixers, garnishes, and specialized tools. We source our products from trusted suppliers to ensure exceptional quality, so you can confidently create cocktails that rival those of professional bartenders.
                            <br />
                            We believe that learning and sharing knowledge is essential to the cocktail culture. That's why we host regular events, including clinics, where you can join our team of expert mixologists to learn tips, tricks, and techniques for crafting exceptional cocktails. These events provide an opportunity to connect with fellow cocktail enthusiasts, exchange ideas, and expand your mixology skills.
                            <br />
                            Our commitment to excellence extends beyond our recipes and products. We prioritize user satisfaction, and our dedicated customer support team is always available to assist you with any inquiries or concerns you may have. Your experience and enjoyment are our top priorities, and we continuously strive to provide exceptional service.
                            <br />
                            Join us on this exciting journey as we explore the world of cocktails together. Whether you're looking to impress your guests at a dinner party, unwind after a long day, or simply expand your mixology knowledge, Cocktail Delights is here to guide and inspire you every step of the way.
                            <br />
                            Cheers to creating unforgettable cocktail experiences!
                        </p>
                        <p>
                            <hr />
                            [Company Name]
                            <br />
                            [Tagline: Crafting Cocktails with Passion]
                        </p>
                    </div>
                    <img src={AboutImg1} alt="about-img1" />
                </div>
            </div>
        </section>
    )
}

export default About;