import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const SplashBanner: React.FC<Props> = ({}: Props) => {
  return (
    <div className="relative w-full  h-screen items-center flex-col md:flex-row overflow-y-hidden capitalize flex md:justify-between overflow-x-hidden ">
      <div className="  mt-10 md:mt-0  w-1/2 flex flex-col h-screen justify-center md:pl-32 text-3xl text-purple-950  lg:text-6xl font-bold">
        
        <div className="flex mt-12 md:mt-0 w-full justify-center md:justify-start gap-3">
          <span className="w-22 h-8 border border-orange-600 text-orange-600 rounded-full flex justify-center items-center p-2">
            <p>Modern</p>
          </span>
          <span className="w-22 h-8 border border-orange-600 text-orange-600 rounded-full flex justify-center items-center p-2">
            <p>Digitalized</p>
          </span>
        </div>
        <h3 className=" text-center md:text-start ">
          Tech{" "}
          <strong className="text-3xl text-orange-700 uppercase  lg:text-5xl ">
            Solutions
          </strong>{" "}
          For all{" "}
          <strong className="text-3xl text-orange-700 uppercase  lg:text-5xl ">
            Businesses
          </strong>
          <br /> Big or Small
        </h3>
        <p className=" text-gray-600 text-xs font-light text-center md:text-start md:text-sm pt-2">
          we provide businesses with web and <br /> graphic design solutions
        </p>
        <div className="w-full flex justify-center md:justify-start mt-4">
          <a
            href="#missions"
            className="w-40 h-10 text-[20px] text-center flex justify-center items-center align-text-bottom text-white bg-purple-950 hover:bg-white hover:text-purple-950 hover:border hover:border-purple-950 rounded-full transition-all ease-linear delay-300"
          >
            Learn More{" "}
          </a>
        </div>
      </div>
      <div className="flex w-1/2 flex-5 h-screen justify-center items-center">
        <img
          className="relative md:top-20 mr-0 md:mr-20"
          src="splashImage.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SplashBanner;
