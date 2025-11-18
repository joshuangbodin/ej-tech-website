import React from "react";
import { motion } from "framer-motion";
import { targetAudience } from "../data/home.d";

type Props = {};

const Target: React.FC<Props> = ({}) => {
  return (
    <section className="w-full overflow-x-hidden bg-black pt-40 flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-black backdrop-blur-sm text-center py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Target Audience
        </h2>
        <p className="text-gray-400 mt-4 text-md md:text-lg max-w-2xl mx-auto">
          We collaborate with a wide range of clients aiming to elevate their
          digital presence and make a lasting impact.
        </p>
      </div>

      {/* Audience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-20">
        {targetAudience.map((audience, idx) => (
          <motion.div
            key={audience.id}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/60 border-gray-800/60 border backdrop-blur-md rounded-2xl px-6 py-10 text-center shadow-lg shadow-black/30 cursor-default flex flex-col items-center justify-center gap-3"
          >
            <div className="text-orange-500 mb-2">{audience.logo}</div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {audience.name}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm">
              {audience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Target;
