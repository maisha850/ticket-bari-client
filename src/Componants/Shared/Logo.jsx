import React from 'react';

import { Link } from 'react-router';

import { BsTrainFrontFill } from 'react-icons/bs';


const Logo = () => {
    return (
        <Link className='flex items-center  ' to={'/'}>
         <BsTrainFrontFill className='text-green-400' size={20} style={{ transform: "scaleX(-1)" }}></BsTrainFrontFill>
         <h3 className='font-bold text-xl text-primary '>TICKETBARI</h3>
        </Link>
    );
};

export default Logo;