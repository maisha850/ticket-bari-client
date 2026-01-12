// import React from 'react';
// import Loading from '../Shared/Loading';
// import { Link } from 'react-router';
// import { FaArrowRight } from 'react-icons/fa6';
// import { FaBusAlt, FaCheckCircle } from 'react-icons/fa';

// const AdvertiseCard = ({ticket}) => {
  
//     if(!ticket){
//         return  null
//     }
   
 
    

//     return (
        
//              <div className=" w-full h-142 shadow-2xl  rounded-lg overflow-hidden  ">
//       {/* Banner Image */}
//        <img 
//         src={ticket.image} 
//         alt={ticket.title} 
//         className="w-full h-70 object-cover "
//       />

//       {/* Content */}
//       <div className=" space-y-4 p-5">
          
        

//         {/* Title & Type */}
      
//           <h2 className="text-3xl font-bold ">{ticket.title}</h2>
          
        
//             <div className='flex items-center gap-2'><FaBusAlt className='text-green-400'></FaBusAlt> <span className='font-medium'>{ticket.transportType}</span></div>
        
//        <div className="flex items-center justify-between">
//           <p className="text-xl font-bold text-green-600 tracking-wide">
//             ৳ {ticket.price}
//             <span className="text-sm  font-medium"> / ticket</span>
//           </p>

//           <p className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
//             {ticket.quantity} seats left
//           </p>
//         </div>
//         <p className="text-sm font-semibold  mb-2">Included Perks:</p>
//          <div className='flex flex-wrap gap-3'>
//           {ticket.selectedPerks.map((perks , ind)=><div key={ind} className='bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded-full flex items-center gap-2 text-sm'>
//            <FaCheckCircle className='text-green-400'></FaCheckCircle> {perks}
//             </div>)}
               
       
//          </div>
//      <Link className='block text-center btn-primary' to={`/ticket-details/${ticket._id}`}>See Details </Link>
          
//         </div>
     
    
//         </div>
        
        
//     );
// };

// export default AdvertiseCard;

import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaBusAlt, FaCheckCircle, FaHeart, FaShareAlt } from "react-icons/fa";

export default function AdvertiseCard({ ticket }) {
  if (!ticket) return null;

  return (
    <div className="group w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Image Section */}
      <div className="relative h-56 w-full">
        <img
          src={ticket.image}
          alt={ticket.title}
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Title Over Image */}
        <h2 className="absolute bottom-3 left-4 text-white text-xl font-semibold drop-shadow-lg">
          {ticket.title}
        </h2>

      
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
<div className="flex items-center justify-around text-green-600">
   <p>{ticket.from}</p> <span><FaArrowRight></FaArrowRight></span>
 <p>{ticket.to}</p>
</div>
        {/* Price */}
        <p className=" dark:text-gray-400 font-bold text-xl">
          ৳ {ticket.price}
          <span className="text-gray-600 text-sm font-normal"> / ticket</span>
        </p>

        <div className="flex justify-between">
          {/* Transport Type */}
        <div className="flex items-center text-gray-700 dark:text-gray-300 gap-2">
          <FaBusAlt className="text-green-500" />
          <span className="text-sm font-medium">{ticket.transportType}</span>
        </div>

         <p className="text-sm bg-gray-100 dark:bg-gray-700  border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 inline-block rounded-full font-medium">
          {ticket.quantity} seats left
        </p>
        </div>

        {/* Perks */}
        <div>
          <p className="text-sm font-semibold text-gray-700  dark:text-gray-300 mb-2">
            Included Perks:
          </p>

          <div className="flex flex-wrap gap-2">
            {ticket.selectedPerks?.map((perk, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 text-xs"
              >
                <FaCheckCircle className="text-green-500" />
                {perk}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
        

          {/* Details Button */}
          <Link
            to={`/ticket-details/${ticket._id}`}
            className="block text-center btn-primary"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
