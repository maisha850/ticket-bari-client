import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex '>
      {/* Left Side: Sidebar Component */}
    <Sidebar></Sidebar>
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
      <Outlet></Outlet>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;