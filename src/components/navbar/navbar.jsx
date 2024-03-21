import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

function Navbar() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClick = (item) => {
    setSelectedOption(item);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar_options">
        <li className={selectedOption === 0 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(0)}>
          <NavLink to="/">Overview</NavLink> 
        </li>
        <li className={selectedOption === 1 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(1)}>
          <NavLink to="/contacts">Contacts</NavLink> 
        </li>
        <li className={selectedOption === 2 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(2)}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <button className='button_navbar'>+ New</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
