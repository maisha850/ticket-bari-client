import React from "react";
import { FaArrowRight, FaClock, FaBus, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";


const TicketCard = () => {
  return (
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-2xl">

      {/* Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkU02t3zkgVG_t4AEhoKXbR57jLY7ephRjQ&s"
        alt="Bus"
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Ticket Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Green Line Express - Super Deluxe
        </h2>

        {/* From → To */}
        <div className="flex items-center justify-between text-lg font-medium text-yellow-600">
          <span>Dhaka</span>
          <FaArrowRight className="text-yellow-500" />
          <span>Chittagong</span>
        </div>

        {/* Transport Type */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaBus className="text-yellow-500" />
          <span>AC Sleeper Coach</span>
        </div>

        {/* Price + Quantity */}
        <div className="flex items-center justify-between text-gray-700">
          <p className="text-lg font-bold text-green-600">৳ 1,250 / ticket</p>
          <p className="text-sm">Available: <span className="font-semibold">18</span></p>
        </div>

        {/* Perks */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700 mb-1">Included Perks:</p>
          <div className="flex flex-wrap gap-3 text-gray-600 text-sm">
            <span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> Wifi</span>
            <span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> Blanket</span>
            <span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" /> Water</span>
          </div>
        </div>

        {/* Departure Info */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock className="text-yellow-500" />
          <p>Departure: Dec 14, 2025 — 09:30 PM</p>
        </div>

        {/* See details button */}
        <Link 
          to="/ticket-details"
          className="w-full block text-center bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200"
        >
          See Details
        </Link>

      </div>
    </div>
  );
};

export default TicketCard;
