// import React from "react";
// import { FaArrowRight, FaClock, FaBus, FaCheckCircle } from "react-icons/fa";
// import { Link } from "react-router";


// const TicketCard = ({ticket}) => {
//       const{title, image ,departure , from , to,price , quantity,selectedPerks,transportType,_id}=ticket
//   return (
//     <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl">

//       {/* Image */}
//       <img
//         src={image}
//         alt="Bus"
//         className="w-full h-52 object-cover"
//       />

//       {/* Content */}
//       <div className="p-5 space-y-4">

//         {/* Ticket Title */}
//         <h2 className="text-xl font-semibold text-gray-800">
//           {title}
//         </h2>

//         {/* From → To */}
//         <div className="flex items-center justify-between text-lg font-medium text-yellow-600">
//           <span>{from}</span>
//           <FaArrowRight className="text-yellow-500" />
//           <span>{to}</span>
//         </div>

//         {/* Transport Type */}
//         <div className="flex items-center gap-2 text-gray-600">
//           <FaBus className="text-yellow-500" />
//           <span>{transportType}</span>
//         </div>

//         {/* Price + Quantity */}
//         <div className="flex items-center justify-between text-gray-700">
//           <p className="text-lg font-bold text-green-600">৳ {price} / ticket</p>
//           <p className="text-sm">Available: <span className="font-semibold">{quantity}</span></p>
//         </div>

//         {/* Perks */}
//          <div className="space-y-1">
//                   <p className="text-sm font-medium text-gray-700 mb-1">Included Perks:</p>
//                   <div className="flex flex-wrap gap-3 text-gray-600 text-sm">
//                     {
//                         selectedPerks.map(perk=><span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> {perk}</span>)
//                     }
                    
                   
//                   </div>
//                 </div>

//         {/* Departure Info */}
//         <div className="flex items-center gap-2 text-gray-600">
//           <FaClock className="text-yellow-500" />
//           <p>{departure}</p>
//         </div>

//         {/* See details button */}
//         <Link 
//           to={`/ticket-details/${_id}`}
//           className="w-full block text-center bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200"
//         >
//           See Details
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default TicketCard;
import React from "react";
import { FaArrowRight, FaClock, FaBusAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const TicketCard = ({ ticket }) => {
  const {
    title,
    image,
    departure,
    from,
    to,
    price,
    quantity,
    selectedPerks,
    transportType,
    _id,
  } = ticket;

  return (
    <div className="w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">

      {/* Header Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Title Over Image */}
        <h2 className="absolute bottom-3 left-4 text-2xl font-semibold text-white drop-shadow-md">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">

        {/* Route */}
        <div className="flex items-center justify-between text-lg font-semibold text-gray-800">
          <span>{from}</span>
          <FaArrowRight className="text-yellow-500 text-xl" />
          <span>{to}</span>
        </div>

        {/* Transport Type */}
        <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1 rounded-full w-fit">
          <FaBusAlt className="text-yellow-500" />
          <span className="font-medium">{transportType}</span>
        </div>

        {/* Price + Available Seats */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-green-600 tracking-wide">
            ৳ {price}
            <span className="text-sm text-gray-700 font-medium"> / ticket</span>
          </p>

          <p className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
            {quantity} seats left
          </p>
        </div>

        {/* Perks */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Included Perks:</p>
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

        {/* Departure */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock className="text-yellow-500 text-lg" />
          <p className="font-medium">{departure}</p>
        </div>

        {/* Button */}
        <Link
          to={`/ticket-details/${_id}`}
          className="block text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition"
        >
          See Details
        </Link>

      </div>
    </div>
  );
};

export default TicketCard;

