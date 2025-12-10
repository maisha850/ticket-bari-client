import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { NavLink } from 'react-router';

const AdminMenu = () => {
    return (
         <div className='flex flex-col justify-center items-center'>
       <div className=''>
          <NavLink className='text-xl font-bold text-gray-600 hover:text-gray-400 flex items-center justify-center' to={'/dashboard/user-management'}>  <MdAddCircle size={20}></MdAddCircle>Manage Users</NavLink>
           <NavLink className='text-xl font-bold text-gray-600 hover:text-gray-400 flex items-center justify-center' to={'/dashboard/manage-tickets'}>  <MdAddCircle size={20}></MdAddCircle>Manage Ticket</NavLink>
        
       
       </div>
        </div>
    );
};

export default AdminMenu;