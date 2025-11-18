import React from "react";

type Props = {};

const SplashBanner: React.FC<Props> = ({}: Props) => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 md:px-16 ">
      {/* Tiny Label */}
      <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-4">
        Modern Digitalized
      </span>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight text-center md:text-left mb-6">
        Tech <span className="text-orange-600">Solutions</span>  
        <br />
        For Every <span className="text-orange-600">Business</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-base md:text-lg max-w-2xl text-center md:text-left mb-8">
        Empowering your brand with modern web and graphic design solutions that
        scale and inspire.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        <a
          href="#missions"
          className="px-6 py-3 bg-orange-600  font-semibold rounded-full hover:bg-orange-500 transition-all duration-300"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-purple-950 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default SplashBanner;
