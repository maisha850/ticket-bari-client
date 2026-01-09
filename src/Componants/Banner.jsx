// import React from 'react';
// import { motion } from "motion/react";

// import banner from '../assets/ChatGPT Image Dec 13, 2025, 10_24_42 PM.png'
// import { Link } from 'react-router';

// const Banner = () => {
//    return (
// <section className=" flex justify-center items-center text-white  " >
//     <motion.div initial={{ opacity: 0, y: -30 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.8 }} className='w-full block mx-auto bg-center bg-cover bg-no-repeat h-200' style={{
//     backgroundImage:
//       `url(${banner})`,
//   }}>
// <div className=" pt-40 space-y-6 ml-20 ">
// {/* Animated Title */}
// <motion.h1
// initial={{ opacity: 0, y: -30 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.8 }}
// className="text-5xl md:text-6xl  font-bold leading-tight"
// >
// Welcome to <span className="text-title">TicketBari</span>
// </motion.h1>


// {/* Subtitle */}
// <motion.p
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// transition={{ delay: 0.4, duration: 0.8 }}
// className="text-lg md:text-xl text-blue-100 max-w-lg "
// >
// Your smart and simple online ticket booking partner. Book buses, trains, and planes in seconds!
// </motion.p>


// {/* Buttons with animation */}
// <motion.div
// initial={{ opacity: 0, y: 20 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ delay: 0.7, duration: 0.8 }}
// className="flex  gap-4 mt-6"
// >
// <Link to={'/all-tickets'} className="px-6 pt-3 bg-gradient-to-br from-green-400 to-blue-800  text-black font-semibold rounded-lg shadow-md transition duration-200 ">
// Book Now
// </Link>
// <button className="px-6 py-3 text-lg rounded-2xl font-semibold shadow-lg bg-white text-blue-600 hover:bg-blue-100">
// Learn More
// </button>
// </motion.div>


// {/* Floating Animation Illustration */}
// {/* <motion.img
// src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// alt="Ticket Illustration"
// className="w-40 md:w-52 mx-auto mt-10 drop-shadow-xl"
// animate={{ y: [0, -12, 0] }}
// transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// /> */}
// </div>
//     </motion.div>

// </section>
// );
// };

// export default Banner;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from '../assets/ChatGPT Image Dec 13, 2025, 10_24_42 PM.png'

const Banner = () => {
  return (
    <div className="w-full h-[70vh]">
      <Swiper
        modules={[Autoplay,  Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        
        pagination={{ clickable: true }}
        className="h-full"
      >

           <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1547380243-c25d8e5dbe5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRyYWlufGVufDB8fDB8fHww')",
            }}
          >
            <div className="max-w-7xl  px-6 ">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
                Comfortable & Reliable
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white">
                Premium coaches with trusted vendors
              </p>
              <button className="px-8 py-4 text-xl bg-gradient-to-br from-green-400 to-blue-800  text-black font-semibold rounded-lg shadow-md transition duration-200">
                Explore Routes
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                `linear-gradient(to bottom right,   rgba(0, 0, 0, 0.55),
  rgba(0, 0, 0, 0.75)), url(${img})`,
            }}
          >
            <div className="max-w-7xl ml-5 px-6 ">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 z-10 text-white ">
                Travel Smarter, Faster
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white">
                Book premium buses & flights at the best prices
              </p>
              <button className=" px-8 py-4 text-xl bg-gradient-to-br from-green-400 to-blue-800  text-black font-semibold rounded-lg shadow-md transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
     

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right,rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1')",
            }}
          >
            <div className="max-w-7xl  px-6 ">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 z-10 text-white">
                Safe Journeys Guaranteed
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white">
                Trusted routes • Secure payments
              </p>
              <button className="px-8 py-4 text-xl bg-gradient-to-br from-green-400 to-blue-800  text-black font-semibold rounded-lg shadow-md transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
