import React from "react";

type Props = {};

const Imgshw:React.FC = ({}: Props) => {
  return (
    <section className="w-full relative mt-40 md:h-[500px]">
      <span className="block w-full h-1/4 bg-gradient-to-b  z-50 from-white to-transparent absolute "></span>
      <img src="src\assets\marketing.jpg" className="imgshw" alt="" />

      <span className="block w-full h-1/4 bg-gradient-to-t z-50 from-white to-transparent top-3/4 absolute "></span>
    </section>
  );
};

export default Imgshw;
