import React from "react";

import "swiper/css";
import Slider from "./swiper";
import { Link } from "react-router-dom";

type Props = {};

const AboutUs: React.FC<Props> = ({}: Props) => {
  return (
    <section className="w-full  h-[900px] md:h-96 bg-slate-50 flex mt-44 md:mt-20 justify-center items-center">
      <div className="flex gap-10 flex-col md:flex-row w-5/6">
        <div className="flex order-1 mt-10 md:mt-0  md:w-1/2 justify-center">
          <Slider></Slider>
        </div>

        <div className="w-full h-72 md:h-80 p-3 gap-4 flex flex-col capitalize justify-center md:w-1/2 md:order-1 text-gray-600 font-medium text-2xl md:text-4xl">
          <h3 className="text-purple-950 font-bold text-3xl ">Our Mission</h3>
          
          <p className=" font-semibold  md:text-2xl">
            <strong className="text-[50px]  font-extrabold text-gray-400">"</strong>
            Empowering businesses and organisations to succeed in the digital landscape by providing innovative, effective, and visually stunning web development and graphic design solutions that drive growth, engagement, and brand recognition.
          </p>
          <p className="">
            <Link className="w-12 p-1 h-6 bg-gray-200 rounded-lg mr-1 mt-1.5 hover:bg-gray-300 " to="/">Web Development</Link>
            <Link className="w-12 p-1 h-6 bg-gray-200 rounded-lg mr-1 mt-1.5 hover:bg-gray-300 " to="/">Graphic Design</Link>
            <Link className="w-12 p-1 h-6 bg-gray-200 rounded-lg mr-1 mt-1.5 hover:bg-gray-300 " to="/">Digital Services</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
