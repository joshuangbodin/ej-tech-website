import React from "react";
import { ta } from "../data/home";

type Props = {};

const Target: React.FC<Props> = ({}: Props) => {
  return (
    <section className="w-full mt-32 px-6 md:px-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Target Audience
        </h3>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          We serve businesses and individuals who want to make an impact in the digital space.
        </p>
      </div>

      {/* Split layout */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl">
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="GRAPHICSDDESIGN.png"
            alt="Target Audience"
            className="w-4/5 md:w-full rounded-2xl shadow-lg shadow-purple-900/30"
          />
        </div>

        {/* Target List */}
        <div className="flex-1">
          <ul className="flex flex-col gap-4 text-gray-300 text-lg md:text-xl">
            {ta.map((taitem, index) => (
              <li
                key={index}
                className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-orange-500 before:rounded-full"
              >
                {taitem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Target;
