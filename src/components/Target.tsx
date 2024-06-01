import React from "react";
import { ta } from "../data/home";

type Props = {};

const Target: React.FC = ({}: Props) => {
  return (
    <section className=" flex flex-col justify-center items-center mt-40">
      <h3 className="text-purple-950 font-bold text-3xl ">
        Our Target Audience
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center w-5/6 ">
        <img
          src="GRAPHICSDDESIGN.png"
          className=" w-[80%] md:w-1/3"
          alt=""
        />
        <ul className="ta">
          {ta.map((taitem, index) => (
            <li key={index}>{taitem}</li>
          ))}{" "}
        </ul>
      </div>
    </section>
  );
};

export default Target;
