import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvaider/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {user,logout,setUser}=useContext(AuthContext)
    // Active link-er jonno 
    const linkStyle = ({ isActive }) => 
        `px-4 py-2 rounded-lg transition-all duration-300 ${
            isActive 
            ? 'bg-primary text-white font-bold shadow-md' 
            : 'hover:bg-blue-50 text-gray-600 hover:text-primary'
        }`;

    const links = (
  <>
    <li><NavLink className={linkStyle} to="/">Home</NavLink></li>
    <li><NavLink className={linkStyle} to="/services">Services</NavLink></li>
    <li><NavLink className={linkStyle} to="/profile">My Profile</NavLink></li>
     
  </>
);


    const handleLogOut=()=>{
     logout()
     .then(()=>{
            toast.success('You logged out successfully')
            setUser(null)
         }).catch(err=>{
            toast.error(err.code)
            
         })
    }

    return (
      //  sticky position 
        <div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow-lg border border-blue-50">
                        {links}
                    </ul>
                </div>
                
                {/* Logo Section  */}
                <Link to="/home" className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
                        <span className="text-2xl">🐾</span>
                    </div>
                    <span className="text-2xl font-black tracking-tight text-blue-900 hidden sm:block">
                        Pet<span className="text-primary">Care</span>
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-3">

              {
                user ?
                  <>
            {/* //Avatar with hover name  */}
            <div className="relative group">
              <img
                src={user?.photoURL || "/user.png"}
                alt="user"
                className="w-11 h-11 rounded-full cursor-pointer border-2 border-primary"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                bg-black text-white text-sm px-3 py-1 rounded 
                opacity-0 group-hover:opacity-100 transition">
                {user.displayName}
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogOut}
              className="btn btn-primary btn-sm md:btn-md text-white px-6 rounded-full"
            >
              Logout
            </button>
          </>
                 :
                 <>
                 <NavLink 
                    to='/login' 
                    className="btn btn-ghost btn-sm hidden md:flex text-gray-600"
                >
                    Login
                </NavLink>
                <NavLink 
                    to='/register' 
                    className="btn btn-primary btn-sm md:btn-md text-white px-6 rounded-full shadow-lg hover:shadow-primary/30"
                >
                    Register
                </NavLink>
                 </>
              }
                
            </div>
        </div>
    );
};

export default Navbar;