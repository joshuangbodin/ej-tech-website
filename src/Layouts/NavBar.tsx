import { HomeIcon, PackageIcon, PhoneIcon, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Services", path: "/services", icon: <PackageIcon /> },
];

const NavBar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScroll || current < 50);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 130, damping: 20 }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#17083a]/80 border-b border-white/10 px-6 md:px-12 py-3 flex items-center justify-between"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-orange-600 rounded-lg flex justify-center items-center shadow-neonSm"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-black font-bold text-lg">E</span>
            </motion.div>
            <span className="text-white font-semibold tracking-wide text-lg">
              EJ-TECH
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group font-medium text-white transition-colors duration-300"
              >
                {link.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 bg-orange-600 rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </Link>
            ))}

            {/* Phone CTA */}
            <a
              href="tel:+2349054783583"
              className="flex items-center gap-2 text-sm transition-colors duration-300"
            >
              <motion.div
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0f0524] text-white hover:bg-orange-600"
                whileHover={{ scale: 1.2 }}
              >
                <PhoneIcon size={16} />
              </motion.div>
              <span className="hidden md:inline font-semibold text-white hover:text-orange-600">
                +2349054783583
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Menu size={20} className="text-white" />
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full left-0 w-full bg-[#17083a]/95 backdrop-blur-md flex flex-col items-center gap-6 py-6"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-semibold text-white hover:text-orange-600 transition-colors duration-300"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a
                    href="tel:+2349054783583"
                    className="flex items-center gap-2 text-white hover:text-orange-600"
                  >
                    <PhoneIcon size={18} />
                    Call Us
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
