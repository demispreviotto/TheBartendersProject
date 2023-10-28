import React from "react";
const Register = () => {
    return (
        <section className="section">

            <h1>Register</h1>
            <form id="registerForm" >
                <div className="container">

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id='email' placeholder="example@mail.com" />
                    <label htmlFor="psw">Password</label>
                    <input type="password" name="psw" id="psw" placeholder="not1234!" />
                    <label htmlFor="psw">Repeat Password</label>
                    <input type="password" name="psw" id="psw" placeholder="the same password" />
                    <hr />

                    <label htmlFor="userName">Name</label>br
                    <input type="text" name="userName" id="userName" placeholder="John" />
                    <label htmlFor="userLastName">Last Name</label>
                    <input type="text" name="userLastName" id="userLastName" placeholder="Doe" />
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="tel" name="contactNumber" id="contactNumber" placeholder="+34" />

                    <hr />
                    <label htmlFor="bartender">Register as a Bartender</label><br />
                    <input type="checkbox" name="bartender" id="bartender" />
                    <p>To work with us you can register as a bartender.<br />your credentials will be reviewed by suitable personnel from The Bartenders Project. You will be contacted to validate your skills in person at one of our partner locations.</p>
                    <label htmlFor="credentials">Share your credentials</label><br />
                    <input type="file" name="credentials" id="credentials" />
                    <hr />
                    <button className="btn primary-btn">submit</button>
                </div>
            </form>
        </section>
    )
}

export default Register;