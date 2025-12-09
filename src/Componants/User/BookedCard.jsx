import React, { useEffect, useState } from 'react';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
const BookedCard = ({ticket}) => {
     const [countdown, setCountdown] = useState("");
     const instance = useAxiosSecure()
     //  countdown
        useEffect(() => {
        if (!ticket) return;
    
        const targetDate = new Date(`${ticket.departure}`);
    
        const timer = setInterval(() => {
          const now = new Date();
          const difference = targetDate - now;
    
          if (difference <= 0) {
            setCountdown("🚀 Departure Time Reached");
            clearInterval(timer);
            return;
          }
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
    
          setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    
        }, 1000);
    
        return () => clearInterval(timer);
      }, [ticket]);



const handlePayment = async () => {
  try {
    const paymentInfo = {
       
      ticketsId: ticket._id,
      total: ticket.total,
      userEmail: ticket.userEmail,
      title: ticket.title,
      quantity: ticket.quantity
    };

    console.log("Sending Payment Info:", paymentInfo);

    const res = await instance.post('/payment-checkout-session', paymentInfo);
    console.log("Stripe Session:", res.data);

    window.location.href = res.data.url;
  } catch (error) {
    console.error("Payment Error:", error);
  }
};



    return (
         <div>
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
    <p>{
      ticket.status === 'paid' ? <p className='btn btn-xs btn-success btn-outline'>Paid</p> : <p className='btn btn-xs btn-error btn-outline'>{ticket.status}</p>
}
</p>
        </div>
         {/* Countdown */}
        <div className="bg-gray-100 py-3 px-5 rounded-md text-center">
          <p className="text-gray-600 text-sm">Departure Countdown</p>
          <h3 className="text-xl font-semibold text-green-600">{countdown}</h3>
        </div>

        {/* Route */}
        <p className="text-lg font-medium text-gray-700">
          {ticket.from} → {ticket.to}
        </p>
        

        {/* Info Grid */}
        <div className=" text-gray-700">
        
          <p><span className="font-semibold">Booking Quantity:</span> {ticket.quantity}</p>
          <p><span className="font-semibold">Total price:</span> ৳{ticket.total}</p>
        
          <p><span className="font-semibold">Departure Date:</span> {ticket.departure}</p>
          
        </div>

        

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
       
            
            {/* {ticket.departure === 0 ? <button className='btn btn-disabled' disabled>Book Now</button> : <button className='btn-primary'>Book Now</button>}   */}
       
{/* Open the modal using document.getElementById('ID').showModal() method */}
{ ticket.status === "pending" && <button onClick={handlePayment} className="btn-primary">Pay Now</button> }


         
        </div>
      </div>
    </div>
  
        </div>
    );
};

export default BookedCard;