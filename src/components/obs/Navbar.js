import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
// import logo from '../assets/img/logo.svg'
import { links } from '../data';
// import { links, social } from '../data';
import { NavLink, Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
// import { FaShoppingBag } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { IoSkullOutline } from 'react-icons/io5';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../components/LoginButton";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const { amount } = useGlobalContext();

    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = `0px`
        }
    }, [showLinks])

    return (
        <nav className='nav'>
            <div className="nav-center">
                <div className="nav-header">
                    <div>
                        <Link to={'/'} className='logo-link'>
                            {/* <img src={logo} alt="logo" className='logo' /> */}
                            <IoSkullOutline />
                        </Link>
                    </div>
                    <div className="links-container" ref={linksContainerRef}>
                        <ul className='links' ref={linksRef}>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id} onClick={() => setShowLinks(!showLinks)}>
                                        <NavLink to={url}>{text}</NavLink></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='nav-container'>
                        {/* <div>
                        <ul className="social-icons">
                            {social.map((socialIcon) => {
                                const { id, url, icon } = socialIcon;
                                return (
                                    <li key={id}><a href={url}>{icon}</a></li>
                                )
                            })}
                        </ul>
                    </div> */}
                        <Link to={'/cart'} className='cart-icon'>
                            <BsBag size='1.5rem' className='cart-icon' />
                            <div className='amount-container'>
                                <p className='total-amount'>{amount}</p>
                            </div>
                        </Link>
                        {isAuthenticated ? (<>
                            <Link to={'/profile'} className='user'>
                                <img src={user.picture} alt={user.name} className='user-avatar' />
                            </Link>
                        </>) : (<>
                            <LoginButton></LoginButton>
                        </>)}
                    </div>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <div id="navMenu" className={showLinks ? 'active' : ''}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;