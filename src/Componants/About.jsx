

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-gray-100 dark:bg-gray-900">
      
      {/* ===== IMAGE LEFT ===== */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className="w-full md:w-1/2 mb-8 md:mb-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lfGVufDB8fDB8fHww" // Replace with your image path
          alt="About TicketBari"
          className="rounded-xl shadow-lg w-full h-160 object-cover"
        />
      </motion.div>

      {/* ===== TEXT RIGHT ===== */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className="w-full md:w-1/2 md:pl-12"
      >
        <h2 className="text-title -ml-55 mb-3">
          About TicketBari
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          TicketBari is a modern, user-friendly online ticket booking platform designed to simplify your travel experience.Our platform provides real-time seat availability so you can book your ticket instantly with confidence.Safety and reliability are at the core of our services, ensuring that every journey is secure and hassle-free.
TicketBari aims to reduce travel planning stress by offering a seamless, intuitive interface. our platform supports secure online payments, giving peace of mind for every transaction.With TicketBari, you can manage bookings, cancellations, and refunds directly from your dashboard.Our mission is to empower travelers to explore new destinations efficiently and affordably.TicketBari promotes transparency, providing clear information about ticket prices, taxes, and additional fees.
Our team works tirelessly to partner with reliable vendors and transport providers.We value user feedback and continuously update the platform based on customer needs. TicketBari is designed for solo travelers, families, and business professionals alike. Our vision is to become the most trusted and widely-used ticket booking platform in the country. By using TicketBari, users save time, reduce stress, and gain a clear overview of all travel options.The platform encourages responsible travel by highlighting safe and verified transportation services.TicketBari supports multiple payment methods to make the booking process convenient for everyone. Our analytics and tracking tools help travelers monitor their travel history and upcoming trips. With 24/7 customer service, TicketBari ensures that help is always available if needed.We believe that technology should make travel simple, and TicketBari is built with that principle in mind.
Join thousands of satisfied users who trust TicketBari for fast, reliable, a
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Our mission is to make travel planning seamless for everyone. From buses to luxury coaches, 
          TicketBari ensures that you reach your destination comfortably and on time. Join thousands of 
          happy travelers and experience the future of ticket booking today.
        </p>
      </motion.div>
    </section>
  );
}
