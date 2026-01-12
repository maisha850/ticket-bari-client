import React from 'react';
import { MdAddCircle, MdAirplaneTicket } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import {  NavLink } from 'react-router';
import { GrMoney } from 'react-icons/gr';
import { FaHome } from 'react-icons/fa';

const VendorMenu = () => {
    return (
        <div className='flex flex-col  gap-5'>
       
   
         <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard'} end>  <FaHome size={20}></FaHome>Home</NavLink>
         <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/add-tickets'}>  <MdAddCircle size={20}></MdAddCircle>Add tickets</NavLink>
         <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/my-added-tickets'}>  <MdAirplaneTicket size={20}></MdAirplaneTicket>My Added tickets</NavLink>
         <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/requested-bookings'}>  <FaCodePullRequest  size={20}></FaCodePullRequest>Requested Bookings</NavLink>
        
       
        </div>
    );
};

export default VendorMenu;