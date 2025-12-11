import React from 'react';
import Loading from '../Shared/Loading';

const AdvertiseCard = ({ticket}) => {
  
    if(!ticket){
        return  null
    }
   
 
    

    return (
        
             <div className=" max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-lg overflow-hidden mt-10 flex gap-8">
      {/* Banner Image */}
       <img 
        src={ticket.image} 
        alt={ticket.title} 
        className="w-100  object-cover"
      />

      {/* Content */}
      <div className=" space-y-4">

        {/* Title & Type */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{ticket.title}</h2>
          <div className=" text-gray-700">
        
          <p><span className="font-semibold">Booking Quantity:</span> {ticket.quantity}</p>
          <p><span className="font-semibold">Total price:</span> ৳{ticket.price}</p>
        
       
          
        </div>
     
    
        </div>
        </div>
        </div>
    );
};

export default AdvertiseCard;