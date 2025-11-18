import React from "react";
import { motion } from "framer-motion";
import { targetAudience } from "../data/home.d";

type Props = {};

const Target: React.FC<Props> = ({}: Props) => {
  // Split into panels of 3 items each
  const panelSize = 3;
  const panels = [];
  for (let i = 0; i < targetAudience.length; i += panelSize) {
    panels.push(targetAudience.slice(i, i + panelSize));
  }

  return (
    <section className="w-full bg-black pt-40 flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-black/0 z-10 text-center py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Target Audience
        </h2>
        <p className="text-gray-400 mt-4 text-md md:text-lg max-w-2xl mx-auto">
          We collaborate with a wide range of clients aiming to elevate their
          digital presence and make a lasting impact.
        </p>
      </div>

      {/* Panels */}
      <div className="relative">
        {panels.map((panel, idx) => {
          const fromLeft = idx % 2 === 0; // alternate animation
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 bg-black/10"
            >
              {panel.map((audience) => (
                <motion.div
                  key={audience.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/60 border-gray-800/60 border backdrop-blur-md rounded-2xl px-6 py-6 md:w-1/3 text-center h-72 w-full shadow-lg shadow-black/30 cursor-default flex flex-col items-center justify-center gap-2"
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Target;
