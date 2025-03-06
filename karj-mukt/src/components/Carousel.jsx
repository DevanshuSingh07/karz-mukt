import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const images = [
  "img1.webp",
  "img2.webp",
  "img3.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  // Auto-scroll setup
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000); // Auto-scroll every 5s
    return () => clearInterval(intervalRef.current);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-screen max-h-[800px] overflow-hidden select-none"
    >
      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Carousel Slide"
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 sm:p-4 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetInterval();
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            } transition-transform`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#1E3A8A] px-4 sm:px-6 md:px-12 bg-black bg-opacity-50">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white"
        >
          Get Legal Debt Settlement Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg mb-4 max-w-lg text-white"
        >
          Professional help to negotiate with banks and financial institutions for your loan settlements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://forms.zohopublic.in/certifymyhealth/form/ApplicationForm/formperma/N5Ov9DqCVOwaGgAPkEuGqPQl3KKCW4EiQNCTf_nAiv0" className="bg-[#0D9488] hover:bg-[#0B766E] text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold rounded-md shadow-md">
            Book Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
