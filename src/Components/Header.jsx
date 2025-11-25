import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
  }
  const link = <>
    <Link className='ml-10' to='/'>Home</Link>
    <Link className='ml-10' to='/about'>About</Link>
    {
      user?.email && <Link className='ml-10' to='/appointment'>Appointment</Link>
    }
    {
      user?.email && <Link className='ml-10' to='/reviews'>Reviews</Link>
    }
    
    <Link className='ml-10' to='/contactUs'>Contact Us</Link>
    <nav className="flex items-center">
      {user?.email && <Link to="/profile" className="ml-10">Profile</Link>}
      {user?.email ? (
        <button onClick={handleLogOut} className="ml-10">Log out</button>
      ) : (
        <Link to="/login" className="ml-10">Login</Link>
      )}

      {
        user?.email && <Link className='ml-5' to='/history'>Archive</Link>
      }
    </nav>
  </>
  return (


    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {link}


          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Doctor Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>

    </div>


  );
};

export default Header;