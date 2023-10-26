import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../components/Header/Header.css';
import CritoLogo from '#images/logo_crito.svg';

const HeaderContact = () => {
    return (
        <header>
            <div className="container">
                <a href="index.html"><img src={CritoLogo} alt="crito logo" /></a>
                <button className="menu-bars"><i className="fa-solid fa-bars-staggered" title="folded menu-bar"></i></button>
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
                            <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav>
                            <nav>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/services">Service</NavLink>
                                <NavLink to="/news">News</NavLink>
                                <NavLink to="/Contact">Contact</NavLink>
                            </nav>
                        </nav>
                        <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderContact