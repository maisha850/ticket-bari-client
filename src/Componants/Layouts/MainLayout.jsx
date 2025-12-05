import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main className='py-15'>
             <Outlet></Outlet>
           </main>
        </div>
    );
};

export default MainLayout;