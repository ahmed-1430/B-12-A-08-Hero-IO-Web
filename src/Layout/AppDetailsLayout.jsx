import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AppDetailsLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
            
        </div>
    );
};

export default AppDetailsLayout;