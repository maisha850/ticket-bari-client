import React from 'react';
import Logo from './Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {
  const{user , logOut}=useAuth()
    const links = <>
    <NavLink to="/" className="mr-8 ">Home</NavLink>
    <NavLink to="/" className="mr-8 ">All Tickets</NavLink>
    <NavLink to="/" className="mr-8 ">Dashboard</NavLink>
   {
    !user && <>
     <NavLink to="/register" className="mr-8 ">Register</NavLink>
     <NavLink to="/logIn" className="mr-8 ">Log In</NavLink>
    </>
   }
    </>
    const handleLogOut=async()=>{
await logOut()
toast.success('Log Out Successfully!')
    }
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
    <a className=" text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
     { user && <div>
      <div className="dropdown dropdown-hover dropdown-center">
  <div tabIndex={0} role="button" className=" m-1"> <img className={`w-10 h-10 rounded-full`} src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuVWYC8V8zN-N8UpwDUvuQ8eYidEUQfi7U0rJ2JHLKQ&s'} alt="" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a className='text-lg font-semibold mx-auto'>{user?.displayName}</a></li>
    <button onClick={handleLogOut} className='btn btn-primary '>Log Out</button>
  </ul>
</div>
</div>
     }
 {
  user ? <button onClick={handleLogOut} className='btn'>Log Out</button> : <Link to={`/logIn`} className='btn'>Log In</Link>
 }
  </div>
</div>
    );
};

export default Navbar;