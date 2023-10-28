import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { links } from '../data';
import { NavLink, Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import { BsBag } from 'react-icons/bs';
import { IoSkullOutline } from 'react-icons/io5';

import { useAuth0 } from '@auth0/auth0-react';
import ButtonLogin from "../components/ButtonLogin";
import ButtonUser from "./ButtonUser";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const { amount } = useGlobalContext();

    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800 || showLinks) {
                linksContainerRef.current.style.visibility = `visible`
            } else {
                linksContainerRef.current.style.visibility = `hidden`
            }
        }
        const handleClickOutside = (event) => {
            if (showLinks && !linksContainerRef.current.contains(event.target)) {
                setShowLinks(false)
                linksContainerRef.current.style.visibility = `hidden`
            }
        }
        const handleScroll = () => {
            if (showLinks) {
                setShowLinks(false)
                linksContainerRef.current.style.visibility = `hidden`
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)
        document.addEventListener("click", handleClickOutside)
        document.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            document.removeEventListener("click", handleClickOutside)
            document.removeEventListener("scroll", handleScroll)
        }
    }, [showLinks])

    return (
        <nav className='nav'>
            <div className="nav-center">
                <div className="nav-header">
                    <div>
                        <Link to={'/'} className='logo-link'>
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
                        <Link to={'/cart'} className='cart-icon'>
                            <BsBag size='1.5rem' className='cart-icon' />
                            {amount > 0 && (
                                <div className='amount-container'>
                                    <p className='total-amount'>{amount}</p>
                                </div>
                            )}
                        </Link>
                        {isAuthenticated ? (<>
                            <ButtonUser></ButtonUser>
                        </>) : (<>
                            <ButtonLogin></ButtonLogin>
                        </>)}
                    </div>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <div id="navMenu" className={showLinks ? 'active' : ''}>
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