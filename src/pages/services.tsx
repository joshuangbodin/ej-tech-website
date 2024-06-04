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
import Card from "../components/card";

type Props = {};

const Services: React.FC<Props> = ({}: Props) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full min-h-screen h-[calc(640dvh)] md:h-[380vh]  absolute  bg-gradient-to-t from-purple-950 to-orange-600 rounded-2xl bg-orange-600 top-0"></div>
      <div className="w-full p-6 relative   h-[600dvh] md:h-[350vh] z-30 mt-14 bg-gradient-to-r from-[#ffff]/90 to-[#ffff]/60 rounded-2xl flex flex-col  lg:gap-20 backdrop-blur-xl">
        <div>
          <h3 className="text-purple-900 text-xl md:text-3xl font-bold capitalize">
            Service DashBoard
          </h3>
        </div>
        <div className=" flex w-full p-4 bg-[#ffff]/60 rounded-xl justify-between items-center h-32 mb-14 md:mb-8 px-2 md:px-12 lg:px-20">
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold">
            <p>
              <CountUp
                duration={20}
                className="text-xl md:text-3xl "
                end={3}
              ></CountUp>
              +
            </p>
            <p>Services</p>
          </div>
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold">
            <p>
              <CountUp
                duration={20}
                className="text-xl md:text-3xl "
                end={21}
              ></CountUp>
              +
            </p>
            <p>Sub-Services</p>
          </div>
          <div className="flex flex-col justify-center items-center text-purple-900 font-bold">
            <p>
              <CountUp
                duration={20}
                className="text-xl md:text-3xl "
                end={35}
              ></CountUp>
              +
            </p>
            <p>Tools</p>
          </div>
        </div>
        <div className=" flex flex-col gap-12"> 
          <Card subservices={services[0].more} name="Web Development" img="code3.jpg">
            <FaHtml5 className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaJs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaCss3 className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaReact className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaVuejs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaNodeJs className="text-5xl text-purple-950 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
          </Card>
          <Card subservices={services[1].more} name="Graphic Design" img="graphics1.jpg">
            <FaPhotoVideo className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaPaintBrush className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaPalette className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaDesktop className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaFigma className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaCamera className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
          </Card>
          <Card subservices={services[2].more} name="Additional Services" img="code3.jpg">
            <FaFacebook className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaIntercom className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaGithub className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaGoogle className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaWebflow className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
            <FaMailBulk className="text-5xl text-purple-900 hover:text-orange-600 transition-all ease-linear delay-150 cursor-pointer hover:skew-y-6 " />
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
