import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav">
            <span><NavLink to="/about">About</NavLink></span>
            <span><NavLink to="/certificate">Certificates</NavLink></span>
            <span><NavLink to="/project">Projects</NavLink></span>
            <span><NavLink to="/more">More</NavLink></span>
            <span> <NavLink to='/contact '>Contacts</NavLink></span>
        </div>
    </div>
  )
}

export default Navbar;
