import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";// Make sure to add an animated dragon image in your assets folder
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full sm:px-2 z-50 transition-all shadow-[#1E3A8A] duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg py-3 md:py-4 mt-2 rounded-2xl " : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="relative max-w-8xl mx-auto flex justify-between items-center px-6">
        {/* logo */}
        <div className="logobox gap-4 flex flex-row">
        <motion.div 
  initial={{ opacity: 0, y: -20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex items-center justify-center"
>
  <img src={logo} alt="Karz-Mukt Logo" className="h-12 w-auto -mt-2 " />
</motion.div>
         {/* name */}
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">
            <span>Karz</span><span className="hover:text-[#0D9488]">Mukt</span>
          </Link>
        </motion.div>
        </div>
       

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {["Services", "AboutUs", "Testimonials", "Contact"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, color: "#0D9488" }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="transition-all duration-200 cursor-pointer hover:text-[#0D9488]">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-[#1E3A8A] text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden rounded-b-xl"
          >
            <nav className="flex flex-col items-center bg-white space-y-6 py-6 text-lg">
              {["Services", "AboutUs", "Testimonials", "Contact"].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, color: "#0D9488" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="transition-all duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
