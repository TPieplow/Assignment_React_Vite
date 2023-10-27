import React from 'react'
import { NavLink, Link } from 'react-router-dom';


import './Navigation.css'
import Button from '#button'

import img_logotype from '#images/logo_crito.svg'

const Navigation = () => {
  return (
    <section className="nav-section">
      <div className="container">
        <Link to="/"><img src={ img_logotype } alt="crito logo" /></Link>
        <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
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
              <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
              <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
              <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Service</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
            </nav>
            <Button type="yellow" text="Login" url="/login" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation