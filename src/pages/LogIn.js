import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import LoginButton from "../components/LoginButton";
// import Home from '/Home';

const LogIn = ({setUser}) => {

    const [logIn, setLogIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPsw, setUserPsw] = useState('');

    const navigate = useNavigate();

    const logInSubmit = (e) => {
        e.preventDefault();
        // let email = document.getElementById('email').value;
        // let psw = document.getElementById('psw').value;
        // email.length === 0 || psw.length === 0 && alert('Empty data');
        if (!userEmail || !userPsw) return;
        if (userEmail === 'admin@admin.com' && userPsw === '1234') {
            setLogIn(true);
            setUser({userEmail, userPsw})
            // document.getElementById('login_form').style.display = 'none';
            navigate('/');
        } else {
            setLogIn(false);
            alert('the username or password is incorrect');
            document.getElementById('email').value = '';
            document.getElementById('psw').value = '';
            document.getElementById('user').focus();
        }

    }

    return (
        <section className="section">
            <h1>Login</h1>
            <form classname='form' id="login_form" onSubmit={logInSubmit}>
                <label htmlFor="email">Email: </label>
                <input 
                type="email" 
                name="email" 
                id='email' 
                placeholder="example@mail.com" 
                autoComplete='off' 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)} 
                required />
                <br />
                <label htmlFor="psw">Password: </label>
                <input 
                type="password" 
                name="psw" 
                id="psw" 
                placeholder="not1234!" 
                value={userPsw} 
                onChange={(e) => setUserPsw(e.target.value)} 
                required />
                <br />
                <button className="btn primary-btn" value='Login'>submit</button>
            </form>
            {/* {logIn==='true' && <Home/>} */}
            <hr />
            <Link to={'/register'}>
                <button className="btn secondary-btn">Sing In</button>
            </Link>
        </section>
    )
}

export default LogIn;