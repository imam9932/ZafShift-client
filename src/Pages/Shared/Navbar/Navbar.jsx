import React from 'react';
import Logo from '../../../Component/Logo';
import { Link, NavLink } from 'react-router';
import { FaLocationArrow } from 'react-icons/fa';
import UseAuth from '../../../Hooks/UseAuth';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,signOutUser}=UseAuth();

  const handleLogOut=()=>{
    signOutUser()
    .then(result=>{
            console.log(result);
            toast.success('Log-out successful')
          })
          .catch(error=>{
            console.log(error.message)
            toast.error(error.message)
          })
  }
  const links=<div className='flex gap-5'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/services'}>Services</NavLink>
    <NavLink to={'/coverage'}>Coverage</NavLink>
    <NavLink to={'/aboutUs'}>About Us</NavLink>
    <NavLink to={'/sendParcel'}>Send Parcel</NavLink>
    <NavLink to={'/blog'}>Blog</NavLink>
    <NavLink to={'/dashboard'}>Dashboard</NavLink>

    {
      user && <div>
        <NavLink to={'/dashboard/my-parcels'}>My Parcels</NavLink>
      </div>
    }
  </div>
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
        {links}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?  <a className="btn" onClick={handleLogOut}>Log-Out</a>
    : <Link to={'/login'} className="btn">Log-in</Link>
    
   }
   <Link to={'/rider'} className="btn ml-3 bg-primary"> Be A Rider</Link>

  </div>
</div>
  );
};

export default Navbar;