"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Software Engineer",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "ticketBari made booking bus tickets incredibly easy. The seat selection and instant confirmation are excellent.",
  },
  {
    name: "Nusrat Jahan",
    role: "University Student",
    location: "Chattogram",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "The interface is clean and the payment process feels very secure. ticketBari is my go-to platform.",
  },
  {
    name: "Tanvir Hasan",
    role: "Business Consultant",
    location: "Sylhet",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4,
    feedback:
      "A reliable platform with accurate schedules. Online booking feels effortless with ticketBari.",
  },
  {
    name: "Farhana Akter",
    role: "HR Executive",
    location: "Rajshahi",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    feedback:
      "Smooth booking experience and clear seat layout. ticketBari saves a lot of time.",
  },
  {
    name: "Imran Hossain",
    role: "Startup Founder",
    location: "Khulna",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 4,
    feedback:
      "Clean UI and reliable service. I use ticketBari frequently for business travel.",
  },
  {
    name: "Sadia Islam",
    role: "Marketing Specialist",
    location: "Barishal",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    feedback:
      "Very user-friendly platform with instant confirmation. Highly recommended.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const getIndex = (offset) =>
    (active + offset + testimonials.length) % testimonials.length;

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <h2 className="text-title mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Trusted by travelers across Bangladesh
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 sm:gap-6 max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[-1, 0, 1].map((offset) => {
          const item = testimonials[getIndex(offset)];
          const isCenter = offset === 0;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{
                opacity: 1,
                scale: isCenter ? 1.05 : 0.9,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`
                bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center
                p-5 sm:p-6 lg:p-8
                ${isCenter ? "z-10" : "opacity-70"}
                ${
                  offset === 0
                    ? "block"
                    : "hidden sm:block"
                }
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`rounded-full mx-auto mb-4 object-cover ${
                  isCenter
                    ? "w-20 h-20 sm:w-24 sm:h-24"
                    : "w-16 h-16"
                }`}
              />

              <p
                className={`text-sm leading-relaxed mb-3 ${
                  isCenter
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                “{item.feedback}”
              </p>

              <div className="text-yellow-400 text-lg mb-2">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <h4
                className={`font-semibold ${
                  isCenter
                    ? "text-gray-900 dark:text-white text-lg"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </h4>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.role} • {item.location}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
