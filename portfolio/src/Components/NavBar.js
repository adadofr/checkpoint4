import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/NavBar.css'

function NavBar () {
  return (
    <div className='desktop-top-nav-bar'>
      <div className='desktop-top'>
      <NavLink
            exact
            to='/'
            className='link-home'
          >
        <div className='topnav-bar-element-1'>
          <p>HOME</p>
        </div>
      </NavLink>
      <NavLink
            exact
            to='/aboutme'
            className='link-about'
          >
          <div className='topnav-bar-element-2'>
          <p>ABOUT ME</p>
        </div>
      </NavLink>
      <NavLink
            exact
            to='/portfolio'
            className='link--portfolio'
          >
          <div className='topnav-bar-element-3'>
            <p>PORTFOLIO</p>
          </div>    
        </NavLink>    
      <NavLink
          exact
          to='/contact'
          className='link-contact'
        >
          <div className='topnav-bar-element-4'>
            <p>CONTACT</p>
          </div>
      </NavLink>
    </div>
            
    </div>
  );}

export default NavBar;