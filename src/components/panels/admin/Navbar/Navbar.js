import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Paper } from '@material-ui/core';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return window.removeEventListener('resize', showButton)
    
  }, []);

  return (
    <>
      
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
        
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <MdFingerprint className='navbar-icon' /> */}
              <img src="https://puc.ac.bd/Content/assets/Image/puc.png" className="navbar-icon"/>
              Student Information System
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Post
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Log out</Button>
                  </Link>
                ) : (
                  <Link to='/' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log out
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          </nav>
          
      </IconContext.Provider>
    </>
  );
}

export default Navbar;