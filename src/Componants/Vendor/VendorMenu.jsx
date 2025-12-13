import React from 'react';
import { MdAddCircle, MdAirplaneTicket } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import {  NavLink } from 'react-router';
import { GrMoney } from 'react-icons/gr';

const VendorMenu = () => {
    return (
        <div className='flex flex-col  gap-5'>
       
   
         <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/add-tickets'}>  <MdAddCircle size={20}></MdAddCircle>Add tickets</NavLink>
         <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/my-added-tickets'}>  <MdAirplaneTicket size={20}></MdAirplaneTicket>My Added tickets</NavLink>
         <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/requested-bookings'}>  <FaCodePullRequest  size={20}></FaCodePullRequest>Requested Bookings</NavLink>
         <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/revenue'}>  <GrMoney size={20}></GrMoney>Revenue</NavLink>
       
        </div>
    );
};

export default VendorMenu;