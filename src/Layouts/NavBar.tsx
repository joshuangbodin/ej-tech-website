import { MenuIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

interface Props {}

const NavBar: React.FC<Props> = ({}: Props) => {
  console.log(window.pageYOffset);
  const [left, setLeft] = useState(false)
  const [style, setStyle] = useState(
    "flex bg-white fixed w-full top-0 justify-between py-4 px-2 h-20 z-90 font-semibold text-center items-center  "
  );
  /*window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      setStyle(
        "flex bg-white justify-between fixed w-full top-0 py-2 z-90 px-2 h-16 font-semibold text-center items-center  shadow"
      );
    } else {
      setStyle(
        "flex bg-white fixed w-full top-0 justify-between py-4 px-2 h-20 z-90 font-semibold text-center items-center  "
      );
    }
  });*/

  return (
    <nav className={style}>
      <div className="pt-2  text-purple-950 ">
        {/*<img src="" alt="" />*/}
        <h3>EJ-TECH</h3>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-4  text-purple-950  pt-2">
          <Link to="/" className="text-center  hover:text-purple-700">
            Home
          </Link>
          <Link to="/services" className="text-center hover:text-purple-700">
            Services
          </Link>
        </ul>{" "}
      </div>
      <div>
        <div className="hidden md:flex gap-4">
          <span className=" w-10 h-10 flex justify-center items-center bg-purple-950 text-white rounded-full hover:bg-purple-700">
            <PhoneIcon className="" />
          </span>
          <Link
            className="text-center pt-2  text-purple-950 hover:text-purple-700"
            to="tel: +2348168085372"
          >
            +2348168085372
          </Link>
        </div>
      </div>
      
      
    </nav>
  );
};

export default NavBar;
