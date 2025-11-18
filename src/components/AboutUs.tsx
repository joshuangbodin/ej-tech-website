import React from "react";
import "swiper/css";
import Slider from "./swiper";
import { Link } from "react-router-dom";

type Props = {};

const AboutUs: React.FC<Props> = ({}: Props) => {
  return (
    <section
      id="missions"
      className="w-full bg-black py-24 md:py-32 flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-11/12 max-w-6xl">
        {/* Slider / Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Slider />
        </div>

        {/* Text content */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          {/* Sub-label */}
          <span className="text-accent-orange uppercase text-sm font-semibold mb-2">
            Our Mission
          </span>

          {/* Headline */}
          <h2 className="text-xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
            Empowering businesses to thrive in the digital world
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-xs leading-[2] md:text-lg mb-6">
            We provide modern, effective, and visually striking web development
            and graphic design solutions that increase engagement, growth, and
            brand visibility.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/"
              className="px-4 py-2 text-sm bg-gray-900  border border-gray-800  text-white rounded-full hover:bg-accent-orange hover:text-black transition-all duration-300"
            >
              Web Development
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-sm  text-white rounded-full bg-gray-900  border border-gray-800 hover:bg-accent-orange hover:text-black transition-all duration-300"
            >
              Graphic Design
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-sm bg-brand-purpleLight text-white rounded-full bg-gray-900  border border-gray-800 hover:bg-accent-orange hover:text-black transition-all duration-300"
            >
              Digital Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
