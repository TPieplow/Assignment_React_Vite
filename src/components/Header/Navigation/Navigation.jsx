import React from 'react'
import './Navigation.css'

import Button from '#button'

import img_logotype from '#images/logo_crito.svg'

const Navigation = () => {
  return (
    <section className="nav-section">
      <div className="container">
        <a href="index.html"><img src={ img_logotype } alt="crito logo" /></a>
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
              <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <a className="active" href="index.html">Home</a>
              <a href="services.html">Service</a>
              <a href="news.html">News</a>
              <a href="contact.html">Contact</a>
            </nav>
            <Button type="yellow" text="Login" url="/login" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation