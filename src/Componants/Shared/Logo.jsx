import React from 'react';

import { Link } from 'react-router';

import { BsTrainFrontFill } from 'react-icons/bs';


const Logo = () => {
    return (
        <Link className='flex items-center ' to={'/'}>
         <BsTrainFrontFill size={20} style={{ transform: "scaleX(-1)" }}></BsTrainFrontFill>
         <h3 className='font-bold '>TICKETBARI</h3>
        </Link>
    );
};

export default Logo;