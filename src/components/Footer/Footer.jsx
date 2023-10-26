import React from 'react';

import './Footer.css';

import logo_crito from '#images/crito_logo_footer.svg';
import img_whiteLines from '#images/background_lines_white_right.svg';
import FooterLinks from '../../generics/FooterLinks';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { text: 'About', url: '#'},
        { text: 'Features', url: '#'},
        { text: 'Works', url: '#'},
        { text: 'Career', url: '#'},
      ],
    },
    {
      title: 'Help',
      links: [
        { text: 'Customer Support', url: '#'},
        { text: 'Delivery Details', url: '#'},
        { text: 'Terms & Conditions', url: '#'},
        { text: 'Privacy Policy', url: '#'},
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Free eBooks', url: '#' },
        { text: 'Development Tutorial', url: '#' },
        { text: 'How to - Blog', url: '#' },
        { text: 'YouTube Playlist', url: '#' },
      ],
    },
    {
      title: 'Link',
      links: [
        { text: 'Free eBooks', url: '#' },
        { text: 'Development Tutorial', url: '#' },
        { text: 'How to - Blog', url: '#' },
        { text: 'YouTube Playlist', url: '#' },
      ],
    },
  ];

  return (
    <footer>
      <div className="relative">
        <div className="container">
          <img className="squiggly-footer" src={img_whiteLines} alt="wave-lines for the footer" />
          <div className="crito">
            <img src={logo_crito} alt="logo_crito" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
          </div>
          <div className="info">
            
            {
                footerLinks.map((footerLink, index) => (
                  <FooterLinks key={ index } title={ footerLink.title } links={ footerLink.links } />
                ))
            }
          
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