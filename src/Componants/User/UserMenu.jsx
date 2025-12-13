import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { PiTicket } from "react-icons/pi";
import { NavLink } from 'react-router';

const UserMenu = () => {
    return (
         <div className='flex flex-col gap-5'>
       
          <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/my-booked-tickets'}>  <PiTicket size={20}></PiTicket>My Booked Tickets</NavLink>
          <NavLink className='text-xl font-bold text-gray-500 hover:text-gray-400 flex items-center gap-2' to={'/dashboard/transaction-history'}>  <FaHistory size={20}></FaHistory>Transaction History</NavLink>
       
       
        </div>
    );
};

export default UserMenu;