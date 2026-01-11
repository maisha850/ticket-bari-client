"use client";

import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import AdvertiseCard from "./AdvertiseCard";

const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 h-80 w-full" />
);

const Advertise = () => {
  const instance = useAxios();
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  const {
    data: tickets = [],
    isLoading,
  } = useQuery({
    queryKey: ["advertiseTickets"],
    queryFn: async () => {
      const res = await instance.get("/advertiseTickets");
      return res.data;
    },
  });

  // Autoplay
  useEffect(() => {
    if (paused || tickets.length < 3) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tickets.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, tickets]);

  const getIndex = (offset) =>
    (active + offset + tickets.length) % tickets.length;

  return (
    <section
      className="
      py-24 transition-colors
      
      "
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-title text-green-600">Featured Tickets</h3>
        <p className="pt-5 text-lg text-gray-600 dark:text-gray-400">
          Choose your route, pick your seat, and travel stress-free with fast
          booking, trusted operators, and real-time updates
        </p>
      </div>

      {/* Center Slider */}
      <div
        className="flex justify-center items-center gap-8 max-w-7xl mx-auto px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : [-1, 0, 1].map((offset) => {
              const ticket = tickets[getIndex(offset)];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={ticket._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.05 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`transition-all ${
                    isCenter
                      ? "z-10"
                      : "opacity-70"
                  }`}
                >
                  <AdvertiseCard ticket={ticket} />
                </motion.div>
              );
            })}
      </div>
    </section>
  );
};

export default Advertise;
