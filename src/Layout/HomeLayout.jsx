import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default HomeLayout;