import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginPage from './Login';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-secondary bg-light'>
        {/* ...navbar content... */}
        <div className='container'>
          {/* Logo image on the left */}
          <NavLink className='navbar-brand' to='/'>
            {/* <img
              src="src/component/Images/logonavbar.png"
              height="20"
              alt="Logo"
            /> */}
            <img
              src='src/component/Images/logonavbar.png'
              height='20'
              width='auto' // Set width to auto or a specific value
              alt='Logo'
              className='navbar-logo' // Add a class for styling
            />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-between align-items-center'
            id='navbarNav'
          >
            {/* Centered navigation links */}
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/' onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>

              {/* //-====================================================== */}
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/WhereToFly'
                  onClick={closeNavbar}
                >
                  Where To Fly
                </NavLink>
              </li>
              {/* //====================================================== */}
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/Packages'
                  onClick={closeNavbar}
                >
                  Packages
                </NavLink>
              </li>
              {/* //====================================================== */}
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/CheckBooking'
                  onClick={closeNavbar}
                >
                  CheckBooking
                </NavLink>
              </li>
              {/* //====================================================== */}
              <li className='nav-item'>
                <NavLink className='nav-link' to='/About' onClick={closeNavbar}>
                  About
                </NavLink>
              </li>
            </ul>{' '}
          </div>
          <div className='text-end'>
            {localStorage.getItem('token') ? (
              <button
                className='btn btn-danger'
                onClick={() => {
                  localStorage.clear();
                  navigate('/');
                }}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className='btn btn-outline-secondary'
              >
                Login
              </button>
            )}
            <button
              className='btn btn-primary ms-3'
              onClick={() => navigate('/Signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      {showLogin && <LoginPage onClose={handleCloseLogin} />}{' '}
      {/* Render LoginPage if showLogin state is true */}
    </>
  );
};

export default Header;
