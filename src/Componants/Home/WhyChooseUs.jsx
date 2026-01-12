

import { motion } from "framer-motion";

const featuresLeft = [
  {
    title: "Easy Ticket Booking",
    desc: "Book bus tickets in minutes with a simple, user-friendly interface.",
  },
  {
    title: "Fast Confirmation",
    desc: "Get instant booking confirmation without waiting or extra steps.",
  },
];

const featuresRight = [
  {
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges on ticket bookings.",
  },
  {
    title: "Multiple Transports",
    desc: "Get multiple transport facilities in one place.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-20"
      >
        <h2 className="text-title mb-3">
          Why choose us?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 ">
          From route information to secure payments, ticketBari gives you
          a smooth and reliable booking experience.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center items-center">
        
        {/* Left Features */}
        <div className="space-y-12">
          {featuresLeft.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-right"
            >
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className=" text-gray-600 dark:text-gray-400 leading-relaxed ">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
            <img
              src="https://media.istockphoto.com/id/1496154290/photo/hr-human-resource-management-concept-online-and-modern-technologies-for-simplifying-the-human.jpg?s=612x612&w=0&k=20&c=7QG9G3731zPUKypO9oEacNev5-iMRbndEt9CKibN25Q="
              alt="ticketBari booking"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Features */}
        <div className="space-y-12">
          {featuresRight.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className=" text-gray-600 dark:text-gray-400  leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
