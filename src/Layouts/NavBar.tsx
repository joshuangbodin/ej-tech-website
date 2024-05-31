import { HomeIcon, PackageIcon,  PhoneIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const NavBar = ({}: Props) => {
  const [top, setTop] = useState(
    "w-full  fixed top-0 flex justify-between z-50 font-semibold  p-4 h-[80px] text-purple-950 text-lg bg-slate-50 border-b  transition-all ease-in-out delay-700 "
  );
  let cp = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let pp = window.pageYOffset;
    if (cp < pp) {
      setTop(
        "w-full  fixed top-[-80px] flex justify-between z-50 font-semibold  p-4 h-[80px] text-purple-950 text-lg bg-slate-50 border-b  "
      );
    } else {
      setTop(
        "w-full  fixed top-0 flex justify-between z-50 font-semibold  p-4 h-[80px] text-purple-950 text-lg bg-slate-50 border-b  transition-all ease-in-out delay-300 "
      );
    }
  });
  return (
    <div>
      <nav className={top}>
        <span className="h-full ">
          <h3>EJ-TECH</h3>
        </span>

        <span className="flex gap-4 pt-1">
          <Link className="flex text-md hover:text-orange-600 mr-2" to={"/"}>
            <span className="hidden md:flex">Home</span><span className="flex md:hidden"><HomeIcon/></span>
          </Link>
          <Link className="text-md hover:text-orange-600" to={"/services"}>
          <span className="hidden md:flex">Services</span><span className="flex md:hidden"><PackageIcon/></span>
          </Link>
        </span>

        <Link
          className="flex md:pr-12 gap-2 hover:text-orange-600"
          to={"tel:+2349054783583"}
        >
          <span className="w-8 h-8 bg-purple-950 flex justify-center hover:bg-orange-600 transition-all ease-linear delay-300 items-center text-white rounded-full ">
            <PhoneIcon />
          </span>
          <strong className="font-semibold hidden md:flex">
            +2349054783583
          </strong>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
