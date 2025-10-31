import React from 'react';
import goolePlayIcon from '../assets/google_play.png'
import appStoreIcon from '../assets/App_Store.png'
import { Link } from 'react-router';
import bannerImage from '../assets/hero.png'

const Banner = () => {
    return (
        <div className=''>
            <div className='pt-10 w-11/12 mx-auto'>
                <h1 className='text-[4.5rem] font-semibold text-center py-3'>We Build <br /> <span className='font-extrabold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-center text-[#627382] text-[1.25rem]' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                <div className='flex gap-5 items-center justify-center py-5'>
                    <Link to={'https://play.google.com/store/apps'} target='_blank' className='btn btn-ghost border-2 border-zinc-300 text-[1.15rem] font-semibold py-5'><img src={goolePlayIcon} alt="Google Play logo" className='h-8' /> Google Play</Link>
                    <Link to={'https://www.apple.com/app-store/'} target='_blank' className='btn btn-ghost border-2 border-zinc-300 text-[1.15rem] font-semibold py-5'><img src={appStoreIcon} alt="App store Logo" className='h-8' />App Store</Link>
                </div>
            </div>
            <div className='flex justify-center items-center w-11/12 mx-auto'>
                <img src={bannerImage} alt="Banner image" />
            </div>
            <div className='p-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <h3 className='text-[3rem] font-bold text-center text-white py-3'>Trusted by Millions, Built for You</h3>
                <div className='lg:flex justify-center gap-30 overflow-hidden'>
                    <div className='flex flex-col items-center text-white py-10 md:py-0'>
                        <p>Total Downloads</p>
                        <h2 className='text-[4.5rem] font-bold '>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center text-white py-10 md:py-0'>
                        <p>Total Reviews</p>
                        <h2 className='text-[4.5rem] font-bold'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center text-white py-10 md:py-0'>
                        <p>Active Apps</p>
                        <h2 className='text-[4.5rem] font-bold'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;