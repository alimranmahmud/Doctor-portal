import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Doctor Portal</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal flex gap-4 px-1">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/appointment'>Appointment</Link>
      <Link to='/reviews'>Reviews</Link>
      <Link to='/contactUs'>Contact Us</Link>
      <Link to='/login'>Login</Link>
      
   
    </ul>
  </div>
</div>
    );
};

export default Header;