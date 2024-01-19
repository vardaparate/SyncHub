import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaList, FaTimes, FaBolt } from 'react-icons/fa';

function Navbar() {

    const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	const showButton = () => {
		if(window.innerWidth <= 960) setButton(false);
		else setButton(true);
	}
	window.addEventListener('resize', showButton);

	useEffect( () => {
		showButton();
	}, []);

    const handleClick = () => {
      	setClick(!click);
    }

    const closeMobileMenu = () => {
		setClick(false);
    }

    return (
      <div>
          <nav className = "navbar">
              <div className = "navbar-container">
                  <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                      SyncHub
                      <FaBolt className='main-logo' />
                  </Link>
                  <div className = "menu-icon" onClick = {handleClick}>
                      <FaList className={click ? 'notcurrent' : 'current' }/> 
                      <FaTimes className={click ? 'current' : 'notcurrent'}/>
                  </div>
                  <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                      <li className = "nav-item">
                          <Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>
                              Home
                          </Link>
                      </li>
					  <li className = "nav-item">
                          <Link to = "/services" className = "nav-links" onClick = {closeMobileMenu}>
                              Services
                          </Link>
                      </li>
					  <li className = "nav-item">
                          <Link to = "/products" className = "nav-links" onClick = {closeMobileMenu}>
                              Products
                          </Link>
                      </li>
					  <li className = "nav-item">
                          <Link to = "/sign-up" className = "nav-links" onClick = {closeMobileMenu}>
                              Sign-Up
                          </Link>
                      </li>
                  </ul>
				  
              </div>
          </nav>
      </div>
    )
}

export default Navbar;
