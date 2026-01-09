import { motion } from "framer-motion";

export default function OffersSection() {
  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-title mb-3">Special Offers & Discounts</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Save more on every journey with seasonal promotions, exclusive codes, 
          and membership rewards tailored for you.
        </p>
      </motion.div>

      {/* Offers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Winter Travel Offer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Enjoy <span className="font-semibold">20% off</span> on selected routes.
          </p>
          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
            Code: WINTER20
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            First Booking Discount
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            New users get <span className="font-semibold">15% off</span> on all tickets.
          </p>
          <div className="text-sm font-bold text-green-600 dark:text-green-400">
            Code: FIRST15
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Membership Benefits
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get exclusive discounts, reward points & priority booking.
          </p>
          <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 mt-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
            Join Membership
          </button>
        </motion.div>
      </div>
    </section>
  );
}
