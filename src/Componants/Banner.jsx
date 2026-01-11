
// import { useState } from "react";
// import SearchForm from "./Home/SearchForm";


// const slides = {
//   Bus: "https://media.istockphoto.com/id/1810706721/photo/airplane-flying-over-the-highway-at-sunset.jpg?s=612x612&w=0&k=20&c=3Yrz5peXTwR6tnSo0yHayb9pB2aOKsZxNfucsauHjF4=",
//   Train: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWlufGVufDB8fDB8fHww",
//   Flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8fDA%3D",
// };

// const Banner = ({ onSearch }) => {
//   const [activeTab, setActiveTab] = useState("Bus");

//   return (
//     <div
//       className="relative h-[450px] w-full bg-cover bg-center transition-all duration-700"
//       style={{ backgroundImage: `url(${slides[activeTab]})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

      

//         {/* Search Form */}
//         <div className=" ">
//           <SearchForm
//             onSearch={onSearch}
//             defaultTransport={activeTab}
//             readonlyTransport={true}
//           />
//         </div>
//       </div>
  
   
//   );
// };

// export default Banner;

import { useState } from "react";
import { FaBus, FaTrain, FaPlane } from "react-icons/fa";
import SearchForm from "./Home/SearchForm";

const slides = {
  Bus: {
    image:
      "https://images.unsplash.com/photo-1735924378218-6f995e152427?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Comfortable Bus Journeys Across Bangladesh",
    subtitle:
      "Book reliable bus tickets at the best price. Travel safely and comfortably.",
  },
  Train: {
    image:
      "https://images.unsplash.com/photo-1515165562839-978bbcf18277?w=1200&auto=format&fit=crop&q=60",
    title: "Fast & Affordable Train Travel",
    subtitle:
      "Reserve your train tickets easily and enjoy smooth long-distance journeys.",
  },
  Flight: {
    image:
      "https://images.unsplash.com/photo-1758203219583-c819a24a23d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Book Flights in Minutes",
    subtitle:
      "Find the best flight deals and reach your destination faster.",
  },
};

const Banner = ({ onSearch }) => {
  const [activeTab, setActiveTab] = useState("Bus");

  const { image, title, subtitle } = slides[activeTab];

  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <Tab
            icon={<FaBus />}
            label="Bus"
            active={activeTab === "Bus"}
            onClick={() => setActiveTab("Bus")}
          />
          <Tab
            icon={<FaTrain />}
            label="Train"
            active={activeTab === "Train"}
            onClick={() => setActiveTab("Train")}
          />
          <Tab
            icon={<FaPlane />}
            label="Flight"
            active={activeTab === "Flight"}
            onClick={() => setActiveTab("Flight")}
          />
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
          {title}
        </h1>
        <p className="mt-4 text-gray-200 max-w-xl text-lg">
          {subtitle}
        </p>
      </div>

      {/* Search Form (absolute bottom) */}
      <div className="absolute md:-bottom-8 -bottom-20 w-full flex justify-center z-20 px-4">
        <SearchForm
          onSearch={onSearch}
          defaultTransport={activeTab}
          readonlyTransport={true}
        />
      </div>
    </div>
  );
};

export default Banner;

/* ================= TAB COMPONENT ================= */

function Tab({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition
        ${
          active
            ? "bg-white text-gray-900"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}
