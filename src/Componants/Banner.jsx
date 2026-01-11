import { useState } from "react";
import { FaBus, FaPlane, FaTrain, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Banner() {
  const [activeTab, setActiveTab] = useState("bus");
  const [form, setForm] = useState({
    from: "",
    to: "",
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!form.from || !form.to) return;

    navigate(
      `/search?transportType=${activeTab}&from=${form.from}&to=${form.to}`
    );
  };

  const heroImages = {
    bus: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    plane: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1200",
    train: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200",
  };

  return (
    <section className="relative w-full bg-gray-100 dark:bg-gray-900 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 to-blue-300/40 blur-3xl opacity-30"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Travel Smarter With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-800">
              Ticket Bari
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Book your Bus, Plane, and Train tickets in seconds with real-time availability and secure payments.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={heroImages[activeTab]}
            alt={activeTab}
            className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-700"
          />
        </div>
      </div>

      {/* Search Panel */}
      <div className="relative z-10 max-w-6xl mx-auto -mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">

          {/* Tabs */}
          <div className="flex items-center gap-4 mb-6">
            {[
              { key: "bus", icon: <FaBus /> },
              { key: "plane", icon: <FaPlane /> },
              { key: "train", icon: <FaTrain /> },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full flex items-center gap-2 font-medium transition
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-br from-green-400 to-blue-800 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {tab.icon} {tab.key.charAt(0).toUpperCase() + tab.key.slice(1)}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <input
              type="text"
              placeholder="From"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className="px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="text"
              placeholder="To"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className="px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-700 dark:text-white"
            />

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-br from-green-400 to-blue-800 shadow-lg"
            >
              <FaSearch /> Search Tickets
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
}
