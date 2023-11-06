import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const MenuToggle = ({ toggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)

  return (
    <>
      {isMenuOpen ? (
        <nav className='mobile-menu'>
          <NavLink className="mobileLink" to="/">Home</NavLink>
          <NavLink className="mobileLink" to="/services">Services</NavLink>
          <NavLink className="mobileLink" to="/news">News</NavLink>
          <NavLink className="mobileLink" to="/contact">Contact</NavLink>
        </nav>) : (<></>)}
      <button className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (<i className="fa-sharp fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars-staggered"></i>)}
      </button>

      <div>

      </div>
    </>
  );
};

export default MenuToggle;