import React from 'react';
import '../Style/NavBar.css'

function NavBar () {
  return (
    <div className='desktop-top-nav-bar'>
      <div className='desktop-top'>
      <div className='topnav-bar-element-1'>
              <p>HOME</p>
            </div>
            <div className='topnav-bar-element-2'>
              <p>ABOUT ME</p>
            </div>
       
            <div className='topnav-bar-element-3'>
              <p>PORTFOLIO</p>
            </div>
            <div className='topnav-bar-element-4'>
              <p>CONTACT</p>
            </div>
      </div>
            
    </div>
  );}

export default NavBar;