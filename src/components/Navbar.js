import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/img/logo.svg'
import { links, social } from '../data';
import { NavLink, Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import { FaShoppingBag, FaUser } from 'react-icons/fa'

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const { amount } = useGlobalContext();


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
                    <Link to={'/'} className='logo-link'>
                        <img src={logo} alt="logo" className='logo' />
                    </Link>
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
                        <Link to={'/cart'} className=''>
                            <FaShoppingBag size='1.5rem' className='cart-icon' />
                            <div className='amount-container'>
                                <p className='total-amount'>{amount}</p>
                            </div>
                        </Link>
                        <Link to={'/login'} className='user'>
                            {/* {loggedIn ? <FaUser/> : "LogeIn"} */}
                            <FaUser size='1.5rem' className='' />
                        </Link>
                    </div>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        {/* <FaBars /> */}
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