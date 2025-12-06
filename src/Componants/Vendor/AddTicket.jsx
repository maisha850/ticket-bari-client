import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddTicket = () => {
    const{user}=useAuth()
    const {register , formState:{errors}}=useForm()
    const [selectedPerks, setSelectedPerks] = useState([]);
console.log(selectedPerks)
  const perksOptions = ["AC", "WiFi", "Food", "TV", "Charging Port", "Breakfast"];

  const togglePerk = (perk) => {
    setSelectedPerks((prev) =>
      prev.includes(perk)
        ? prev.filter((item) => item !== perk)
        : [...prev, perk]
    );
  };
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-500">
        🎟 Add New Ticket
      </h2>

      <form className="grid gap-6">

        {/* Ticket Title */}
        <div>
          <input
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Ticket Title"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500 text-sm">Required*</p>}
        </div>

        {/* From - To */}
        <div className="grid grid-cols-2 gap-4">
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="From (Location)"
            {...register("from", { required: true })}
          />
          <input
            className="p-3 border border-gray-300 rounded-md"
            placeholder="To (Location)"
            {...register("to", { required: true })}
          />
        </div>

        {/* Transport Type */}
        <select
          className="p-3 border border-gray-300 rounded-md"
          {...register("transportType", { required: true })}
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
            {...register("price", { required: true })}
          />
          <input
            type="number"
            className="p-3 border border-gray-300  rounded-md"
            placeholder="Ticket Quantity"
            {...register("quantity", { required: true })}
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
            {...register("departure", { required: true })}
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

        {/* Image URL */}
        <input
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Image URL (from imgbb)"
          {...register("image", { required: true })}
        />

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
         Add Ticket
        </button>
      </form>
    </div>
  );

};

export default AddTicket;