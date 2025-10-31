import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link>Home</Link></li>
                            <li><Link>Apps</Link></li>
                            <li><Link>Installation</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl font-bold"><img src={logo} className='h-10' alt="logo" />HERO.IO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Apps</Link></li>
                        <li><Link>Installation</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn flex items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"><FaGithub size={20} />Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;