import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPhotoVideo,
  FaPaintBrush,
  FaFigma,
  FaCamera,
} from "react-icons/fa";
import { services } from "../data/home.d";

type Props = {};

const iconMap: { [key: string]: JSX.Element } = {
  "Web development": (
    <>
      <FaHtml5 />
      <FaCss3 />
      <FaJs />
      <FaReact />
      <FaVuejs />
      <FaNodeJs />
    </>
  ),
  "Graphics Design": (
    <>
      <FaPhotoVideo />
      <FaPaintBrush />
      <FaFigma />
      <FaCamera />
    </>
  ),
  "additional Sevices": (
    <>
      <FaPhotoVideo />
    </>
  ), // placeholder if needed
};

const SplashBanner: React.FC<Props> = ({}: Props) => {
  return (
    <section className="relative w-full h-full pt-[16vh] md:pt-0 md:h-screen flex flex-col justify-center items-center px-6 md:px-16 bg-black">
      {/* Headline */}
      <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight text-center mb-6">
        Transforming Your Business
        <br />
        <span className="text-3xl md:text-6xl text-orange-500">
          With Cutting-Edge Tech Solutions
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-xs leading-[2] md:text-base max-w-2xl text-center mb-8">
        We craft modern web applications, stunning graphics, and innovative
        digital solutions that scale your business, boost engagement, and
        enhance brand identity.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center items-center md:justify-start mb-12">
        <a
          href="#missions"
          className="flex items-center hover:scale-105 text-white bg-orange-600 px-6 border border-orange-500 p-2 rounded-xl gap-2 text-sm transition-all duration-300"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="flex items-center hover:scale-105 text-white px-6 bg-gray-900  border border-gray-800 p-2 rounded-xl gap-2 text-sm transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Services Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade Gradients */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="marquee whitespace-nowrap flex gap-16">
          {/* Loop twice for perfect seamless scrolling */}
          {[...services, ...services].map((service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 
                  rounded-full text-white text-sm md:text-base"
            >
              <span className="flex gap-1 text-xs text-orange-500">
                {iconMap[service.name]}
              </span>
              <span className="text-xs">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
    .marquee {
      display: inline-flex;
      animation: marquee 18s linear infinite;
      will-change: transform;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}
      </style>
    </section>
  );
};

export default SplashBanner;
