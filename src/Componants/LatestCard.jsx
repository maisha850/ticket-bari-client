import React from 'react';
import { FaBusAlt, FaCheckCircle } from 'react-icons/fa';
import { FaArrowRight, FaClock } from 'react-icons/fa6';
import { Link } from 'react-router';

const LatestCard = ({ticket}) => {
     const {
    title,
    image,
 
    price,
    quantity,
    selectedPerks,
    transportType,
    _id,
  } = ticket;
    return (
         <div className="w-full  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ">

      {/* Header Image */}
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

   
        
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
<h2 className=" text-2xl  font-semibold  drop-shadow-md">
          {title}
        </h2>
      

        {/* Transport Type */}
        <div className="flex items-center gap-2 ">
          <FaBusAlt className="text-green-500" />
          <span className="font-medium">{transportType}</span>
        </div>

        {/* Price + Available Seats */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600 tracking-wide">
            ৳ {price}
            <span className="text-sm  font-medium"> / ticket</span>
          </p>

          <p className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            {quantity} seats left
          </p>
        </div>

        {/* Perks */}
        <div>
          <p className="text-sm font-semibold  mb-2">Included Perks:</p>
          <div className="flex flex-wrap gap-2">
            {selectedPerks?.map((perk, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-sm bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full"
              >
                <FaCheckCircle className="text-green-500" /> {perk}
              </span>
            ))}
          </div>
        </div>

     

        {/* Button */}
        <Link
          to={`/ticket-details/${_id}`}
          className="block text-center btn-primary"
        >
          See Details
        </Link>

      </div>
    </div>
    );
};

export default LatestCard;