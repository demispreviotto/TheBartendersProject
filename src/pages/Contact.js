import React from "react";
import './Contact.css'

const Contact = () => {
    return (
        <section className="section">
                <div className="contact-info">
                    <h1 className="heading">Let's work together</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sint architecto consequuntur? Alias quod
                        repudiandae culpa nesciunt eaque a minus rerum maiores officia.
                    </p>
                </div>
                <form action="" className="contact-form">
                    <h3>Send me a message</h3>
                    <input type="text" className="form-input" placeholder="Your Name" required />
                    <input type="email" className="form-input" placeholder="Your Email" required />
                    <textarea placeholder="Proyect Details" className="form-input" required></textarea>
                    <input type="submit" value="Send" className="btn primary-btn" />
                </form>
        </section>
    )
}

export default Contact;