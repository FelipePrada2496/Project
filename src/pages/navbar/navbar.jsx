import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'; 
import logo from './logo.png';
import './navbar.css';
import { getContactsApi } from '../../services/api2';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../reducers/contactSlices';


function Navbar() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const {contacts} = useSelector((state) => state.contacts);

  useEffect( () => {
    (async () => {
      const jsonServer = await getContactsApi();
      dispatch(setContacts(jsonServer));
    })();
  }, []) 


  const handleClick = (item) => {
    setSelectedOption(item);
    setShowMenu(false); 
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section>
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu_toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={showMenu ? "navbar_options active" : "navbar_options"}>
        <li className={selectedOption === 0 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(0)}>
          <NavLink to="/" className='navLink'>Overview</NavLink> 
        </li>
        <li className={selectedOption === 1 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(1)}>
          <NavLink to="/contacts" className='navLink'>Contacts</NavLink> 
        </li>
        <li className={selectedOption === 2 ? 'navbar_option active' : 'navbar_option'} onClick={() => handleClick(2)}>
          <NavLink to="/favorites" className='navLink'>Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/vistaNew" className='button_navbar '>+ New</NavLink>
        </li>
      </ul>
    </nav>

      <div style={{marginTop: '32px'}}>
      {contacts.length <1 ?
      <h1>Cargando informacion...</h1> : <h1/>}
      </div>
  </section>


  )
}

export default Navbar;
