import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { NavLink } from 'react-router';

const UserMenu = () => {
    return (
         <div className='flex flex-col justify-center items-center'>
       <div className=''>
          <NavLink className='text-xl font-bold text-gray-600 hover:text-gray-400 flex items-center justify-center' to={'/dashboard/my-booked-tickets'}>  <MdAddCircle size={20}></MdAddCircle>My Booked Tickets</NavLink>
       
       </div>
        </div>
    );
};

export default UserMenu;