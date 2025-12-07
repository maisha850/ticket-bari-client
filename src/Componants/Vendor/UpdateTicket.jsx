import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { imageUpload } from '../../Utility';
import { useNavigate, useParams } from 'react-router';

const UpdateTicket = () => {
    const{user}=useAuth()
    const{id}=useParams()
    const instance = useAxiosSecure()
    const {register , handleSubmit, formState:{errors}}=useForm()
    const [selectedPerks, setSelectedPerks] = useState([]);
    const [ticket , setTicket]=useState({})
    const navigate = useNavigate()

  const perksOptions = ["AC", "WiFi", "Food", "TV", "Charging Port", "Breakfast"];

  const togglePerk = (perk) => {
    setSelectedPerks((prev) =>
      prev.includes(perk)
        ? prev.filter((item) => item !== perk)
        : [...prev, perk]
    );
  };
    useEffect(() => {
    instance.get(`/tickets/${id}`).then((res) => setTicket(res.data));
  }, [id, instance]);
  const handleTickets=async(data)=>{
    const{title,from, to,transportType,price, quantity,departure}=data
    const imageFile = data.image[0]
    const image = await imageUpload(imageFile)
    
 const ticketInfo={
  title, from, to , transportType ,price:Number(price), quantity:Number(quantity), image,
  departure, selectedPerks ,
   vendorName : user.displayName, vendorEmail: user.email
 }

const res = await instance.patch(`/tickets/${id}`, ticketInfo)
if(res.data.modifiedCount){
toast.success('Tickets updated Successfully!')
navigate('/')
}

console.log(res.data)
return res.data
  }
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
        🎟 Update Ticket
      </h2>

      <form onSubmit={handleSubmit(handleTickets)} className="grid gap-6">

        {/* Ticket Title */}
        <div>
          <input
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Ticket Title"
            defaultValue={ticket.title}
            {...register("title")}
            
          />
          {errors.title && <p className="text-red-500 text-sm">Required*</p>}
        </div>

        {/* From - To */}
        <div className="grid grid-cols-2 gap-4">
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="From (Location)"
            defaultValue={ticket.from}
            {...register("from")}
          />
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="To (Location)"
            {...register("to")}
             defaultValue={ticket.to}
          />
        </div>

        {/* Transport Type */}
        <select
          className="p-3 border border-gray-300 rounded-md"
          {...register("transportType")}
        >
          <option value="">Select Transport Type</option>
          <option>Bus</option>
          <option>Train</option>
          <option>Plane</option>
          
        </select>

        {/* Price & Quantity */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="p-3 border border-gray-300  rounded-md"
            placeholder="Price (per unit)"
            {...register("price")}
             defaultValue={ticket.price}
          />
          <input
            type="number"
            className="p-3 border border-gray-300  rounded-md"
            placeholder="Ticket Quantity"
            {...register("quantity")}
             defaultValue={ticket.quantity}
          />
        </div>

        {/* Date & Time */}
        <div>
          <label className="block font-semibold mb-1">
            Departure Date & Time
          </label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register("departure")}
             defaultValue={ticket.departure}
          />
        </div>

        {/* Perks */}
        <div>
          <label className="block font-semibold mb-1">Perks</label>
          <div className="grid grid-cols-2 gap-2">
            {perksOptions.map((perk) => (
              <label key={perk} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value={perk}
                  onChange={() => togglePerk(perk)}
                />
                {perk} 
               </label>
            ))}
          </div>
        </div>

      
        {/* Image */}
            <div className=' p-4  w-full  m-auto rounded-lg grow'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden file-input'
                      type='file'
                      {...register('image')}
                      name='image'
                      id='image'
                      defaultValue={ticket.image}
                    
                      
                    />
                    <div className='bg-yellow-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-yellow-400'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>


        {/* Vendor Info */}
        <div className="grid grid-cols-2 gap-4">
          <input
            readOnly
            className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
            value={user?.displayName || "Vendor"}
          />
          <input
            readOnly
            className="p-3 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
            value={user?.email || ""}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-fullpx-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition duration-200 "
        >
        Update Ticket
        </button>
      </form>
    </div>
  );

};

export default UpdateTicket;