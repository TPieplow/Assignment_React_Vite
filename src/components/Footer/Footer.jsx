import React from 'react';

import './Footer.css';

import logo_crito from '#images/crito_logo_footer.svg';
import img_whiteLines from '#images/background_lines_white_right.svg';

const Footer = () => {
  return (
    <footer>
      <div className="relative">
        <div className="container">
          <img className="squiggly-footer" src={ img_whiteLines } alt="wave-lines for the footer" />
            <div className="crito">
              <img src={ logo_crito } alt="logo_crito" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="info">
              <div className="link-wrapper">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
              </div>
              <div className="link-wrapper">
                <h3>Help</h3>
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="link-wrapper">
                <h3>Rescources</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">YouTube Playlist</a>
              </div>
              <div className="link-wrapper">
                <h3>Link</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">YouTube Playlist</a>
              </div>
            </div>
        </div>
      </div>
      <div className="copyright container">
        <div>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
        <div className="social-media">
          <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer