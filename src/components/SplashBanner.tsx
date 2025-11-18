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
    <section className="relative w-full h-full pt-[12vh] md:pt-0 md:h-screen flex flex-col justify-center items-center px-6 md:px-16 bg-black">
      {/* Headline */}
      <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight text-center mb-6">
        Transforming Your Business
        <br />
        <span className="text-3xl md:text-6xl text-orange-500">
          With Cutting-Edge Tech Solutions
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-sm md:text-md max-w-2xl text-center mb-8">
        We craft modern web applications, stunning graphics, and innovative
        digital solutions that scale your business, boost engagement, and
        enhance brand identity.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center items-center md:justify-start mb-12">
        <a
          href="#missions"
          className="flex items-center hover:scale-105 text-white bg-orange-600 px-6 border border-orange-500 p-3 rounded-xl gap-2 text-sm transition-all duration-300"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="flex items-center hover:scale-105 text-white px-6 bg-gray-900  border border-gray-800 p-3 rounded-xl gap-2 text-sm transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Services Marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900  border border-gray-800 rounded-full   text-white text-sm md:text-base"
            >
              <span className="flex gap-1 text-xs text-orange-500">
                {iconMap[service.name]}
              </span>
              <span className="text-xs">{service.name}</span>
            </div>
          ))}
          {/* Repeat for continuous scroll */}
          {services.map((service, idx) => (
            <div
              key={"repeat-" + idx}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900  border border-gray-800 rounded-full  text-white text-sm md:text-base"
            >
              <span className=" text-xs flex gap-1 text-orange-500">
                {iconMap[service.name]}
              </span>
              <span className="text-xs">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            gap: 4rem;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SplashBanner;
