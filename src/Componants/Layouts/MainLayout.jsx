import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className=''>
             <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;