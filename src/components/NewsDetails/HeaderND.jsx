import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import CritoLogo from '#images/logo_crito.svg';

const HeaderND = () => {
  return (
    <header>
    <div className="container">
        <Link to="/"><img src={CritoLogo} alt="crito logo" /></Link>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-info">
                    <div className="content-box">
                        <i className="fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <Link to="/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link to="/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Service</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </nav>
                <Link to="/login" className="btn-yellow btn-login">Login <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </div>
</header>
  )
}

export default HeaderND