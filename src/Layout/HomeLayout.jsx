import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
            <section className='bg-[#f5f5f5]'>
                <Banner></Banner>
            </section>
            <section className='bg-[#f5f5f5]'>
                <TrendingApps></TrendingApps>
            </section>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default HomeLayout;