import React, { useState } from 'react';

const MenuToggle = ({ toggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleMenu(isMenuOpen);
  };

  return (
    <button className="menu-bars" onClick={handleToggle}>
      <i className="fa-solid fa-bars-staggered"></i>
    </button>
  );
};

export default MenuToggle;