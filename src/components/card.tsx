import React from "react";

interface Props {
  name: string;
  img: string;
  children: React.ReactNode[];
  subservices: string[];
}

const Card: React.FC<Props> = ({ name, img, children, subservices }: Props) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-purple-900 font-bold capitalize mb-2">{name} :</h3>
      <div className="flex flex-col min-h-96 gap-8 lg:flex-row">
        <div className="w-full lg:w-2/5 h-full bg-[#ffff]/10 mb-10 md:mb-0 p-4 rounded-2xl backdrop-blur-xl hover:bg-[#ffff]/80 ">
          <img className="rounded-2xl w-full h-72 md:h-96 object-cover" src={img} alt="" />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="w-full mb-10 md:mb-0 md:w-1/2 lg:w-full lg:h-1/3 bg-[#ffff]/3  p-4 rounded-2xl backdrop-blur-xl overflow-hidden">
            <h3 className="text-purple-900 font-bold capitalize">Tools:</h3>
            <div className="text-purple-950 flex gap-12 flex-wrap">
              {children}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-full  lg:h-2/3 bg-[#ffff]/3 overflow-y-scroll scroll  p-4 rounded-2xl backdrop-blur-xl">
            <h3 className="text-purple-900 font-bold capitalize">more:</h3>
            <div>
              {subservices.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
