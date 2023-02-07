import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/img/logo.svg'
import { links, social } from '../data';
// import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

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
                    {/* <a href="#" className="logo">Bar<span>tender.</span></a> */}
                    <Link to={'/'}><img src={logo} alt="logo" className='logo' /></Link>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        {/* <FaBars /> */}
                        <div id="navMenu" className={showLinks ? 'active' : ''}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}><Link to={url}>
                                    {text}
                                </Link></li>)
                        })}
                        {/* <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/profile'>Profile</Link></li> */}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}><a href={url}>{icon}</a></li>
                        )
                    })}
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;