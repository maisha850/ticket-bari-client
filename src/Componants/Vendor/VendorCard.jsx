import React from 'react';
import { FaArrowRight, FaClock, FaBus, FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link, useNavigate } from "react-router";
import Swal from 'sweetalert2';

const VendorCard = ({ticket}) => {
    const{title, image ,departure , from , to,price , quantity,selectedPerks,transportType,
vendorEmail , vendorName ,verificationStatus, _id}=ticket
const navigate = useNavigate()
    const instance = useAxiosSecure()
   const handleDelete=()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    instance.delete(`/tickets/${_id}`)
    .then((res)=>{
      if(res.data.deletedCount){
 Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    navigate('/')
      }
    })
   
  }
});
   }
    return (
        <div>
                <div className="w-full  bg-gray-100 dark:bg-gray-800  rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl">

      {/* Image */}
      <img
        src={image}
        alt="Bus"
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Ticket Title */}
        <h2 className="text-xl font-semibold ">
         {title}
        </h2>

        {/* From → To */}
        <div className="flex items-center justify-between text-lg font-medium text-yellow-600">
          <span>{from}</span>
          <FaArrowRight className="text-green-500" />
          <span>{to}</span>
        </div>

        {/* Transport Type */}
        <div className="flex items-center gap-2 ">
          <FaBus className="text-green-500" />
          <span>{transportType}</span>
        </div>

        {/* Price + Quantity */}
        <div className="flex items-center justify-between ">
          <p className="text-lg font-bold text-green-600">৳ {price} / ticket</p>
          <p className="text-sm">Available: <span className="font-semibold">{quantity}</span></p>
        </div>

        {/* Perks */}
        <div className="space-y-1">
          <p className="text-sm font-medium  mb-1">Included Perks:</p>
          <div className="flex flex-wrap gap-3  text-sm">
            {
                selectedPerks.map(perk=><span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> {perk}</span>)
            }
            
           
          </div>
        </div>

        {/* Departure Info */}
        <div className='flex justify-between'>
            <div className="flex items-center gap-2 ">
          <FaClock className="text-green-500" />
          <p>Departure: {departure}</p>
        </div>
       <button className='btn btn-xs border-blue-400 btn-outline'> {verificationStatus}</button>

        </div>
        {/* See details button */}
      
            <div className=''>
              <p className='flex gap-1'>
                Vendor:
                <span className='font-bold  '>
                  {vendorName}
                </span>
              </p>
              <p className='flex gap-1'>
                Email:
                <span className='font-bold  '>{vendorEmail}</span>
              </p>

           
            </div>
            <div className='flex justify-between'>
              {
                ticket.verificationStatus === 'approved' || ticket.verificationStatus === 'pending' ? <Link ticket={ticket} to={`/dashboard/update-ticket/${_id}`}  className='btn-primary'>Update</Link> : <button className='btn btn-disabled'>Update</button>
              }
                
                <button onClick={()=>handleDelete(_id)} className='btn btn-outline'>Delete</button>
            </div>
     

      </div>
    </div>
        </div>
    );
};

export default VendorCard;