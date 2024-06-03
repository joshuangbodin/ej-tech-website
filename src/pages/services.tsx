import React from "react";
import {
  FaCamera,
  FaCss3,
  FaDesktop,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaGoogle,
  FaHtml5,
  FaIntercom,
  FaJs,
  FaMailBulk,
  FaNodeJs,
  FaPaintBrush,
  FaPhotoVideo,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { services } from "../data/home";
import { FaPalette, FaWebflow } from "react-icons/fa6";
import CountUp from "react-countup";

type Props = {};

const Services: React.FC<Props> = ({}: Props) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full min-h-screen h-[calc(550dvh)]  absolute  bg-gradient-to-t from-purple-950 to-orange-600 rounded-2xl bg-orange-600 top-0"></div>
      <div className="w-full p-12 relative  min-h-[calc(437dvh)] h-[500dvh]  z-30 mt-14 bg-gradient-to-r from-[#ffff]/90 to-[#ffff]/60 rounded-2xl flex flex-col  lg:gap-20 backdrop-blur-xl">
        <div>
          <h3 className="text-purple-900 text-xl md:text-3xl font-bold capitalize">
            Service DashBoard
          </h3>
        </div>
        <div className=" flex w-full p-4 bg-[#ffff]/60 rounded-xl justify-between items-center h-32 mb-14 md:mb-8 px-2 md:px-12 lg:px-20">
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold"><p><CountUp duration={20} className="text-xl md:text-3xl " end={3}></CountUp>+</p><p>Services</p></div>
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold"><p><CountUp duration={20} className="text-xl md:text-3xl " end={21}></CountUp>+</p><p>Sub-Services</p></div>
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold"><p><CountUp duration={20} className="text-xl md:text-3xl " end={35}></CountUp>+</p><p>Tools</p></div>
        </div>

        <div className="flex flex-col gap-[100dvh] md:gap-[50dvh] lg:gap-20">
          <div className=" w-full h-72 lg:h-96  flex flex-col ">
            <h3 className="text-purple-900 font-bold capitalize ">
              Web Development
            </h3>
            <div className="flex flex-col lg:flex-row gap-8 h-full w-full">
              <div className="w-full lg:w-2/5 h-full bg-[#ffff]/10  p-4 rounded-2xl backdrop-blur-xl hover:bg-[#ffff]/80 mt-40 md:mt-0">
                <img
                  className="rounded-2xl w-full h-full object-cover" 
                  src="code3.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-3/5 flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="w-full md:w-1/2 lg:w-full lg:h-1/3 bg-[#ffff]/3  p-4 rounded-2xl backdrop-blur-xl overflow-hidden">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    tools
                  </h3>
                  <div className="flex gap-12 flex-wrap">
                    <FaHtml5 className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaJs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaCss3 className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaReact className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaVuejs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaNodeJs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-full  lg:h-2/3 bg-[#ffff]/3 overflow-y-scroll scroll  p-4 rounded-2xl backdrop-blur-xl">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    Services
                  </h3>
                  <ul>
                    {services[0].more.map((service,index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-72 lg:h-96  flex flex-col ">
            <h3 className="text-purple-900 font-bold capitalize ">
              Graphic Design
            </h3>
            <div className="flex flex-col lg:flex-row gap-8 h-full  w-full">
              <div className="w-full lg:w-2/5 h-full bg-[#ffff]/10 lg:order-1  p-4 rounded-2xl backdrop-blur-xl  hover:bg-[#ffff]/80">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="graphics1.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-3/5 flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="w-full md:w-1/2 lg:w-full lg:h-1/3 bg-[#ffff]/10  p-4 rounded-2xl backdrop-blur-xl overflow-hidden">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    tools
                  </h3>
                  <div className="flex gap-12 flex-wrap">
                    <FaPhotoVideo className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaPaintBrush className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaPalette className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaDesktop className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaFigma className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaCamera className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-full  lg:h-2/3 bg-[#ffff]/10 overflow-y-scroll scroll  p-4 rounded-2xl backdrop-blur-xl">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    Services
                  </h3>
                  <ul>
                    {services[1].more.map((service,index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-72 lg:h-96 mt-20 flex flex-col ">
            <h3 className="text-purple-900 font-bold capitalize ">
              Additional Services
            </h3>
            <div className="flex flex-col lg:flex-row gap-8 h-full w-full">
              <div className="w-full lg:w-2/5 h-full bg-[#ffff]/10  p-4 rounded-2xl backdrop-blur-xl hover:bg-[#ffff]/80 mt-40 md:mt-0">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src="social.jpg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-3/5 flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="w-full md:w-1/2 lg:w-full lg:h-1/3 bg-[#ffff]/10  p-4 rounded-2xl backdrop-blur-xl overflow-hidden">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    tools
                  </h3>
                  <div className="flex gap-12 flex-wrap">
                    <FaFacebook className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaIntercom className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaGithub className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaGoogle className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaWebflow className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                    <FaMailBulk className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-full  lg:h-2/3 bg-[#ffff]/10 overflow-y-scroll scroll  p-4 rounded-2xl backdrop-blur-xl">
                  <h3 className="text-purple-900 font-bold capitalize ">
                    Services
                  </h3>
                  <ul>
                    {services[2].more.map((service,index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
