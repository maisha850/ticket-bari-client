import React from 'react';
import { MdAddCircle } from "react-icons/md";
import {  NavLink } from 'react-router';

const VendorMenu = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
       <div className=''>
          <NavLink className='text-xl font-bold text-gray-600 hover:text-gray-400 flex items-center justify-center' to={'/dashboard/profile'}>  <MdAddCircle size={20}></MdAddCircle>Profile</NavLink>
         <NavLink className='text-xl font-bold text-gray-600 hover:text-gray-400 flex items-center justify-center' to={'/dashboard/add-tickets'}>  <MdAddCircle size={20}></MdAddCircle>Add tickets</NavLink>
       </div>
        </div>
    );
};

export default VendorMenu;