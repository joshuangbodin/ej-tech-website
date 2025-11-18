import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61559895644433&mibextid=LQQJ4d" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/ejtechofficial?igsh=cWFiOHlyNGp5czZv&utm_source=qr" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@ejtechofficial?_t=8mmP2nHHOgI&_r=1" },
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black/90 text-white px-6 md:px-20 py-12 flex flex-col gap-10"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12  rounded-lg flex justify-center items-center shadow-md">
          <img src="/logo.png"/>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">EJ-TECH</h2>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Follow Us</h3>
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-300 hover:text-orange-500 text-2xl transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Pages</h3>
          <ul className="flex flex-col gap-3">
            {pages.map((page, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Link
                  to={page.path}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  {page.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; 2025 EJ-TECH. All rights reserved.{" "}
        <Link to="" className="text-orange-500 hover:underline">Privacy Policy</Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
