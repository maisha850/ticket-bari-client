import React from 'react';

import { Link } from 'react-router';

import logo from '../../assets/Gemini_Generated_Image_xze8axxze8axxze8-removebg-preview.png'


const Logo = () => {
    return (
        <Link className='flex items-center  ' to={'/'}>
     <div className='flex flex-col items-center'>
           <img className='w-20 h-10' src={logo} alt="" />
        <h3 className=' font-semibold text-primary text-sm -mt-1'><span className=''>Ticket</span>Bari</h3>
     </div>
        </Link>
    );
};

export default Logo;