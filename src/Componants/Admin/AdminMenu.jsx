import React from 'react';
import { FaHome, FaTicketAlt } from 'react-icons/fa';
import { FaAdversal, FaUsers } from 'react-icons/fa6';
import { MdAddCircle } from 'react-icons/md';
import { NavLink } from 'react-router';

const AdminMenu = () => {
    return (
         <div className='flex flex-col  gap-5'>
            <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard'} end>  <FaHome size={20}></FaHome>Home</NavLink>
      
          <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/user-management'}>  <FaUsers size={20}></FaUsers>Manage Users</NavLink>
           <NavLink className='text-lg p-2  rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/manage-tickets'}>  <FaTicketAlt size={20}></FaTicketAlt>Manage Ticket</NavLink>
        
           <NavLink className='text-lg p-2 rounded-lg font-bold text-gray-300 hover:bg-gray-100/20 flex items-center gap-2' to={'/dashboard/advertise-tickets'}>  <FaAdversal size={20}></FaAdversal>Advertise Tickets</NavLink>
        
       
       
        </div>
    );
};

export default AdminMenu;