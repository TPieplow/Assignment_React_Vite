import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import logo_crito from '#images/crito_logo_footer.svg';
import img_whiteLines from '#images/background_lines_white_right.svg';
import FooterLinks from '../../../generics/FooterLinks';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { text: 'About', url: '/home'},
        { text: 'Features', url: '/home'},
        { text: 'Works', url: '/'},
        { text: 'Career', url: '/'},
      ],
    },
    {
      title: 'Help',
      links: [
        { text: 'Customer Support', url: '/contact'},
        { text: 'Delivery Details', url: '/'},
        { text: 'Terms & Conditions', url: '/'},
        { text: 'Privacy Policy', url: '/'},
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Free eBooks', url: '/' },
        { text: 'Development Tutorial', url: '/' },
        { text: 'How to - Blog', url: '/' },
        { text: 'YouTube Playlist', url: '/' },
      ],
    },
    {
      title: 'Link',
      links: [
        { text: 'Free eBooks', url: '/' },
        { text: 'Development Tutorial', url: '/' },
        { text: 'How to - Blog', url: '/' },
        { text: 'YouTube Playlist', url: '/' },
      ],
    },
  ];

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
            {
                footerLinks.map((footerLink, index) => (
                  <FooterLinks
                      key={ index }
                      title={ footerLink.title }
                      links={ footerLink.links }
                  />
                ))
            }
          </div>
        </div>
      </div>
      <div className="copyright container">
        <div>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
        <div className="social-media">
          <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
          <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
          <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
          <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer