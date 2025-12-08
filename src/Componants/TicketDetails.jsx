
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Loading from './Shared/Loading';

const TicketDetails = () => {
   const {id}=useParams()
   const instance = useAxiosSecure()
   const[ticket , setTicket]= useState({})
     const [countdown, setCountdown] = useState("");
     const bookRef = useRef(null)

   useEffect(()=>{
    instance.get(`/tickets/${id}`)
    .then(res=>{
        console.log(res.data)
        setTicket(res.data)
    })
   },[instance,id])
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
  // model
  const handleModal=()=>{
    bookRef.current.showModal()
  }
  if(!ticket){
    return <Loading></Loading>
  }
    return (
        <div>
             <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg overflow-hidden mt-10 flex gap-5">
      {/* Banner Image */}
      <img 
        src={ticket.image} 
        alt={ticket.title} 
        className="w-full  object-cover"
      />

      {/* Content */}
      <div className=" space-y-4">

        {/* Title & Type */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{ticket.title}</h2>
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {ticket.transportType}
          </span>
        </div>

        {/* Route */}
        <p className="text-lg font-medium text-gray-700">
          {ticket.from} → {ticket.to}
        </p>
         {/* Countdown */}
        <div className="bg-gray-100 py-3 px-5 rounded-md text-center">
          <p className="text-gray-600 text-sm">Departure Countdown</p>
          <h3 className="text-xl font-semibold text-green-600">{countdown}</h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-semibold">Price:</span> ৳{ticket.price}</p>
          <p><span className="font-semibold">Available Tickets:</span> {ticket.quantity}</p>
          <p><span className="font-semibold">Departure Date:</span> {ticket.departure}</p>
          
        </div>

        {/* Perks / Features */}
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Included Perks:</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {ticket.selectedPerks?.map((perk, idx) => (
              <li key={idx}>{perk}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
       
            
            {/* {ticket.departure === 0 ? <button className='btn btn-disabled' disabled>Book Now</button> : <button className='btn-primary'>Book Now</button>}   */}
       
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn-primary" onClick={handleModal}>Book Now</button>
<dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
<form className='flex flex-col gap-3'>
  <label className='text-xl' htmlFor="quantity">Quantity</label>
  <input className='input' type="number" name="" id="" placeholder='Quantity'/>
  <div className="modal-action">
 <button className='btn-primary'>Booked</button>
    </div>
</form>
    
  </div>
</dialog>
         
        </div>
      </div>
    </div>
  
        </div>
    );
};

export default TicketDetails;