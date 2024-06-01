
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="w-full h-[300px]  bg-purple-950 p-6 flex z-90 flex-col justify-center relative  text-white">
      <h3>EJ-TECH</h3>
      <div className="flex gap-20">
        <div className="flex flex-col justify-center mt-6">
          <h3 className="text-white w-1/3  font-bold text-XL ">Socials</h3>
          <ul>
            <li >
              <a className=" flex  items-center gap-2 " href="https://www.facebook.com/profile.php?id=61559895644433&mibextid=LQQJ4d">
                <FaFacebook /> @ejtechofficial
              </a>
            </li>
            <li >
              <a className=" flex  items-center gap-2 " href="https://www.instagram.com/ejtechofficial?igsh=cWFiOHlyNGp5czZv&utm_source=qr">
                <FaInstagram />
                 @ejtechofficial
              </a>
            </li>
            <li >
              <a className=" flex  items-center gap-2 " href="https://www.tiktok.com/@ejtechofficial?_t=8mmP2nHHOgI&_r=1">
                <FaTiktok />
                @ejtechofficial
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center mt-6">
          <h3 className="text-white font-bold text-XL ">Pages</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#">  .</a></li>
          </ul>
        </div>
      </div>

      <div className="  w-full flex justify-center items-center h-12 border-t mt-12 border-gray-500 text-gray-200">
        <p className="text-xs">@2024  privacy policy </p>
      </div>
    </div>
  );
};

export default Footer;
