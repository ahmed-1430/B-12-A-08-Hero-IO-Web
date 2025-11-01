import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-br from-gray-900 to-[#001931] text-white relative -mb-[29px]">
            <div className=" px-4 py-10 max-w-11/12 mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="HERO.IO Logo" className="w-10 h-10" />
                            <span className="text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"> HERO.IO </span>
                        </Link>
                        <p className="text-gray-300 text-m leading-relaxed"> Discover amazing apps for every need. Your ultimate destination for quality applications across all categories.</p>
                    </div>
                    <div>
                        <h3 className="footer-title text-white mb-4">App Categories</h3>
                        <div className="space-y-2">
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Games </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Education </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Entertainment </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Productivity </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Utilities </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-title text-white mb-4">Developers</h3>
                        <div className="space-y-2">
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Submit App </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Developer Guide </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> API Documentation </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Revenue Share </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Support </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-title text-white mb-4">Company</h3>
                        <div className="space-y-2">
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> About Us </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Careers </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Blog </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Press Kit </a>
                            <a className="link link-hover text-gray-300 hover:text-white transition-colors block"> Contact </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8">
                    <div className="text-center">
                        <p className="text-gray-400">
                            © 2025 <span>HERO.IO </span>All right reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
