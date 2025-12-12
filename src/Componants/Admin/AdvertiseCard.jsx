import React from 'react';
import Loading from '../Shared/Loading';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import { FaBusAlt, FaCheckCircle } from 'react-icons/fa';

const AdvertiseCard = ({ticket}) => {
  
    if(!ticket){
        return  null
    }
   
 
    

    return (
        
             <div className=" w-full shadow-2xl  rounded-lg overflow-hidden mt-10 ">
      {/* Banner Image */}
       <img 
        src={ticket.image} 
        alt={ticket.title} 
        className="w-full h-70 object-cover "
      />

      {/* Content */}
      <div className=" space-y-4 p-5">
          
        

        {/* Title & Type */}
      
          <h2 className="text-3xl font-bold ">{ticket.title}</h2>
          
        
            <div className='flex items-center gap-2'><FaBusAlt className='text-green-400'></FaBusAlt> <span className='font-medium'>{ticket.transportType}</span></div>
        
       <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600 tracking-wide">
            ৳ {ticket.price}
            <span className="text-sm  font-medium"> / ticket</span>
          </p>

          <p className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            {ticket.quantity} seats left
          </p>
        </div>
        <p className="text-sm font-semibold  mb-2">Included Perks:</p>
         <div className='flex flex-wrap gap-3'>
          {ticket.selectedPerks.map((perks , ind)=><div key={ind} className='bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded-full flex items-center gap-2 text-sm'>
           <FaCheckCircle className='text-green-400'></FaCheckCircle> {perks}
            </div>)}
               
       
         </div>
     <Link className='block text-center btn-primary' to={`/ticket-details/${ticket._id}`}>See Details </Link>
          
        </div>
     
    
        </div>
        
        
    );
};

export default AdvertiseCard;