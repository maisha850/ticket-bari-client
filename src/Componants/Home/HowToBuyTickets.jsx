

import { motion } from "framer-motion";
import { Search, MousePointerClick, CreditCard } from "lucide-react";

const steps = [
  {
    title: "Search",
    desc: "Choose your origin, destination and journey date to find available trips.",
    icon: Search,
  },
  {
    title: "Select",
    desc: "Select your preferred bus, launch or route and choose your seat.",
    icon: MousePointerClick,
  },
  {
    title: "Pay",
    desc: "Pay securely using Stripe, cards or other payment methods.",
    icon: CreditCard,
  },
];

export default function HowToBuyTickets() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-title mb-3">
          Buy tickets in 3 easy steps
        </h2>
        <p className="text-gray-600 dark:text-gray-400 ">
          Book your tickets quickly and securely with ticketBari
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="items-center justify-center gap-4 flex p-6 rounded-xl dark:bg-gray-800 bg-teal-50"
            >
              {/* Icon */}
              <div className="flex  mb-5">
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
              </div>

              {/* Content */}
            <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
