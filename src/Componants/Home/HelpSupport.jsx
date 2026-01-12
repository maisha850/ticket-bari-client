

import { motion } from "framer-motion";
import {
  FaTicketAlt,
  FaMoneyCheckAlt,
  FaBus,
  FaUserShield,
  FaEnvelopeOpenText,
  FaQuestionCircle,
} from "react-icons/fa";

const supportItems = [
  {
    icon: <FaTicketAlt />,
    title: "Booking Assistance",
    desc: "Get help with searching routes, selecting seats, and confirming your booking smoothly.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payments & Refunds",
    desc: "Facing payment issues or refund questions? We ensure transparent and secure transactions.",
  },
  {
    icon: <FaBus />,
    title: "Travel Information",
    desc: "View accurate schedules, boarding points, operators, and real-time updates.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Ticket Issues",
    desc: "Didn’t receive your ticket or confirmation? Retrieve it instantly with our support.",
  },
  {
    icon: <FaUserShield />,
    title: "Account & Security",
    desc: "Manage your account, reset passwords, and keep your data secure at all times.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "FAQs & Help Center",
    desc: "Find quick answers to common questions without waiting for support.",
  },
];

export default function HelpSupport() {
  return (
    <section className="py-24 px-4  transition-colors">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-title">
          Help & Support
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Your journey matters to us. Get fast, reliable help at every step with
          ticketBari.
        </p>
      </motion.div>

      {/* Support Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {supportItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="text-green-600 text-3xl mb-4">
              {item.icon}
            </div>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          Still need help? Our support team is always ready to assist you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition">
            Visit Help Center
          </button>

          <button className="px-8 py-3 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
            Contact Support
          </button>
        </div>
      </motion.div> */}
    </section>
  );
}
