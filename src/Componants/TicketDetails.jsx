
import React, {  useEffect, useRef, useState } from 'react';
import {  useNavigate,  useParams } from 'react-router';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Loading from './Shared/Loading';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const TicketDetails = () => {
   const {id}=useParams()
   const {user}=useAuth()
  
   const instance = useAxiosSecure()
   const[ticket , setTicket]= useState({})
     const [countdown, setCountdown] = useState("");
     const bookRef = useRef(null)
    //  const {register, handleSubmit}=useForm()
    const { register, handleSubmit, watch, setValue } = useForm({
  defaultValues: {
    quantity: 1,
  },
});

          const departurePassed = new Date(ticket.departure) < new Date();
const navigate = useNavigate()

   useEffect(()=>{
    instance.get(`/tickets/${id}`)
    .then(res=>{
        console.log(res.data)
        setTicket(res.data)
    })
   },[instance,id])
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
  // model
  const handleModal=()=>{
    bookRef.current.showModal()
    
  }
  const handleBookingForm=async(data)=>{
    const booking ={
      ticketId: id,
      title: ticket.title,
      image: ticket.image,
      from: ticket.from,
      to: ticket.to,
      departure: ticket.departure,
      quantity: Number(data.quantity),
      status: "pending",
      price: ticket.price,
      total: Number(data.quantity) * ticket.price,
      bookingTime: new Date().toISOString(),
      userName: user?.displayName,
      userEmail: user?.email 
    };
    
    await instance.post(`/myBookTickets`, booking)
    .then(res=>{
      if(res.data.insertedId){
        toast.success(`${ticket.title} is booked`)
navigate('/dashboard/my-booked-tickets')
console.log(res.data)
      }
    })
    
  }
  if(!ticket){
    return <Loading></Loading>
  }
    return (
        <div>
             <div className="max-w-5xl mx-auto  p-8 shadow-xl rounded-lg overflow-hidden  mt-10 md:flex justify-center gap-10">
      {/* Banner Image */}
      <img 
        src={ticket.image} 
        alt={ticket.title} 
        className="md:w-150  object-cover"
      />

      {/* Content */}
      <div className=" space-y-4">

        {/* Title & Type */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">{ticket.title}</h2>
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {ticket.transportType}
          </span>
        </div>

        {/* Route */}
        <p className="text-lg font-medium ">
          {ticket.from} → {ticket.to}
        </p>
         {/* Countdown */}
        <div className="bg-gray-100 py-3 px-5 rounded-md text-center">
          <p className="text-gray-600 text-sm">Departure Countdown</p>
          <h3 className="text-xl font-semibold text-green-600">{countdown}</h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 ">
          <p><span className="font-semibold">Price:</span> ৳{ticket.price}</p>
          <p><span className="font-semibold">Available Tickets:</span> {ticket.quantity}</p>
      
        </div>
            <p><span className="font-semibold">Departure Date:</span> {ticket.departure}</p>
          

        {/* Perks / Features */}
        <div className="mt-4">
          <h3 className="font-semibold  mb-2">Included Perks:</h3>
          <ul className="list-disc ml-6 ">
            {ticket.selectedPerks?.map((perk, idx) => (
              <li key={idx}>{perk}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
       
           
       
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button disabled={departurePassed}   className={` btn-primary 
      ${departurePassed ? "opacity-50 cursor-not-allowed" : ""}
    `} onClick={handleModal}>Book Now</button>
<dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
<form onSubmit={handleSubmit(handleBookingForm)} className='flex flex-col gap-3'>
  {/* <label className='text-xl' htmlFor="quantity">Quantity</label>
  
  <input
  {...register("quantity", { valueAsNumber: true, required: true })}
  type="number"
  min="1"
  max={ticket.quantity}
  className="input"
  placeholder="Quantity"
/> */}
<div className='flex items-center gap-8'>
<div>
  <h3 className="text-2xl font-semibold">
  Booking Information
</h3>

<div className="flex items-center mt-4 gap-4">
  <label className=" font-semibold">
  Quantity:
</label>
  {/* Decrease */}
  <button
    type="button"
    onClick={() => {
      const current = watch("quantity");
      if (current > 1) {
        setValue("quantity", current - 1);
      }
    }}
    className="w-10 h-10 rounded-full border flex items-center justify-center text-xl font-bold hover:bg-gray-100"
  >
    −
  </button>

  {/* Quantity Input */}
  <input
    type="number"
    {...register("quantity", {
      valueAsNumber: true,
      required: true,
      min: 1,
      max: ticket.quantity,
    })}
    className="w-20 text-center border rounded-lg py-2 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
    min="1"
    max={ticket.quantity}
  />

  {/* Increase */}
  <button
    type="button"
    onClick={() => {
      const current = watch("quantity");
      if (current < ticket.quantity) {
        setValue("quantity", current + 1);
      }
    }}
    className="w-10 h-10 rounded-full border flex items-center justify-center text-xl font-bold hover:bg-gray-100"
  >
    +
  </button>
</div>

{/* Dynamic Total Price */}
<p className=" font-semibold mt-2">
  Total Price: ৳{watch("quantity") * ticket.price}
</p>

<p className="text-sm text-gray-500">
  Available: {ticket.quantity} tickets
</p>
</div>
<img className='w-30 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXCaUE7KTc96jrdLwHKOYLlx5WYwZjJkHJH6_ljQYWQ&s" alt="" />
</div>



  <div className="modal-action">
 <button className='btn-primary'>Confirm</button>
 <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
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