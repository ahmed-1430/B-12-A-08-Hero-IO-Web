import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AppsLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
                <section>
                    <Footer></Footer>
                </section>
            </main>
            
        </div>
    );
};

export default AppsLayout;