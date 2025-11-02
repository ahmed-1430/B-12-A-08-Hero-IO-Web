import React from 'react';
import { Link, useLocation } from 'react-router';
import logo from '../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname == path;
    };

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-45 p-2 shadow">
                            <li><Link to={"/"} className={` ${isActive('/') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Home </Link></li>
                        <li><Link to={"/apps"} className={` ${isActive('/apps') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Apps </Link></li>
                        <li><Link to={"/installation"} className={` ${isActive('/installation') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Installation </Link></li>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl font-bold"> <img src={logo} className='h-10' alt="logo" /> HERO.IO </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><Link to={"/"} className={`btn btn-ghost ${isActive('/') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Home </Link></li>
                        <li><Link to={"/apps"} className={`btn btn-ghost ${isActive('/apps') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Apps </Link></li>
                        <li><Link to={"/installation"} className={`btn btn-ghost ${isActive('/installation') ? 'bg-slate-700 text-white hover:bg-slate-400' : ''}`}> Installation </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link 
                        to={'https://github.com/ahmed-1430'} 
                        target='_blank' 
                        className="btn flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:from-[#5528c4] hover:to-[#8a52d9]"
                    >
                        <FaGithub size={20} />
                        Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;