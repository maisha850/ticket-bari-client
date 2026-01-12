

import { motion } from "framer-motion";

const destinations = [
  {
    name: "Chittagong",
    image:
      "https://images.unsplash.com/photo-1706599452433-af1cae7c785e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    span: "lg:col-span-2",
  },
  {
    name: "Dhaka",
    image:
      "https://images.unsplash.com/photo-1750715832406-f5fcb2eaa344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
    span: "lg:col-span-2",
  },
  {
    name: "Rajshahi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSwpSy-gnUylefVKKds_VupfD6WEEUr05wQ&s",
    span: "lg:col-span-1",
  },
  {
    name: "Rangpur",
    image:
      "https://images.unsplash.com/photo-1624941726848-47b215a1ce9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    span: "lg:col-span-2",
  },
  {
    name: "Sylhet",
    image:
      "https://images.unsplash.com/photo-1705237556465-a31b5cb9a1b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHZpbGxhZ2UlMjBoaWdod2F5fGVufDB8fDB8fHww",
    span: "lg:col-span-1",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Destination() {
  return (
    <section className="py-24 px-4 sm:px-6 ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-title mb-4">
        Trending Destinations
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Explore popular travel destinations across Bangladesh
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative ${item.span} h-60 sm:h-64 rounded-2xl overflow-hidden group`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text */}
            <span className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
