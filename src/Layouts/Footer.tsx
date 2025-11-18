import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {};

const Footer: React.FC<Props> = ({}) => {
  const socialLinks = [
    { icon: <FaFacebook />, label: "@ejtechofficial", href: "https://www.facebook.com/profile.php?id=61559895644433&mibextid=LQQJ4d" },
    { icon: <FaInstagram />, label: "@ejtechofficial", href: "https://www.instagram.com/ejtechofficial?igsh=cWFiOHlyNGp5czZv&utm_source=qr" },
    { icon: <FaTiktok />, label: "@ejtechofficial", href: "https://www.tiktok.com/@ejtechofficial?_t=8mmP2nHHOgI&_r=1" },
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
      className="w-full bg-brand-purpleMid text-white px-6 md:px-16 py-12 flex flex-col gap-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-accent-orange rounded-lg flex justify-center items-center shadow-neon">
          <span className="text-black font-bold text-lg">E</span>
        </div>
        <h2 className="text-2xl font-bold tracking-wide">EJ-TECH</h2>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-accent mb-4">Socials</h3>
          <ul className="flex flex-col gap-3">
            {socialLinks.map((social, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-accent transition-colors duration-300"
                >
                  <span className="text-orange-500">{social.icon}</span>
                  {social.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-accent mb-4">Pages</h3>
          <ul className="flex flex-col gap-3">
            {pages.map((page, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Link
                  to={page.path}
                  className="text-gray-200 hover:text-accent transition-colors duration-300"
                >
                  {page.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-600 pt-4 flex justify-center">
        <p className="text-xs text-gray-400">
          &copy; 2024 EJ-TECH. All rights reserved. <Link to={""} className="text-accent">Privacy Policy</Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
