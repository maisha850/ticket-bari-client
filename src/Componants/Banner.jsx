import React from 'react';
import { motion } from "motion/react";
import banner from '../assets/premium_photo-1723464014732-f09ee387330b.avif'
import banner2 from '../assets/ChatGPT Image Dec 6, 2025, 12_33_22 PM.png'

const Banner = () => {
   return (
<section className=" flex justify-center items-center text-white  " >
    <motion.div initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }} className='w-full block mx-auto bg-center bg-cover bg-no-repeat h-200' style={{
    backgroundImage:
      `url(${banner2})`,
  }}>
<div className=" pt-40 space-y-6 ml-20 ">
{/* Animated Title */}
<motion.h1
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-5xl md:text-6xl  font-bold leading-tight"
>
Welcome to <span className="text-yellow-300">TicketBari</span>
</motion.h1>


{/* Subtitle */}
<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.4, duration: 0.8 }}
className="text-lg md:text-xl text-blue-100 max-w-lg "
>
Your smart and simple online ticket booking partner. Book buses, trains, and planes in seconds!
</motion.p>


{/* Buttons with animation */}
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.7, duration: 0.8 }}
className="flex  gap-4 mt-6"
>
<button className="px-6 py-3 text-lg rounded-2xl font-semibold shadow-lg bg-yellow-400 text-black hover:bg-yellow-300">
Book Now
</button>
<button className="px-6 py-3 text-lg rounded-2xl font-semibold shadow-lg bg-white text-blue-600 hover:bg-blue-100">
Learn More
</button>
</motion.div>


{/* Floating Animation Illustration */}
{/* <motion.img
src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
alt="Ticket Illustration"
className="w-40 md:w-52 mx-auto mt-10 drop-shadow-xl"
animate={{ y: [0, -12, 0] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
/> */}
</div>
    </motion.div>

</section>
);
};

export default Banner;