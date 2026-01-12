import React from 'react';
import { FaHistory, FaHome } from 'react-icons/fa';

import { PiTicket } from "react-icons/pi";
import { NavLink } from 'react-router';

const UserMenu = () => {
    return (
         <div className='flex flex-col gap-5'>

       <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard'} end>  <FaHome size={20}></FaHome>Home</NavLink>
          <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/my-booked-tickets'}>  <PiTicket size={20}></PiTicket>My Booked Tickets</NavLink>
          <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/transaction-history'}>  <FaHistory size={20}></FaHistory>Transaction History</NavLink>
       
       
        </div>
    );
};

export default UserMenu;