import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import ContactForm from "./Form";

const testimonials = [
  {
    text: "Debt Solutions helped me negotiate my loan settlement, saving me thousands!",
    name: "Rahul Sharma",
  },
  {
    text: "I was constantly harassed by recovery agents. Thanks to Karz-Mukt, it finally stopped!",
    name: "Priya Mehta",
  },
  {
    text: "The legal team guided me through my debt case, and I got a favorable settlement.",
    name: "Amit Verma",
  },
  {
    text: "Excellent service! They helped me consolidate my loans and lower my monthly payments.",
    name: "Neha Singh",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6  md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
      
      <div className="relative mx-auto flex items-center justify-evenly ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl italic w-[600px]"
          >
            <FaQuoteLeft className="text-4xl text-gray-600 mb-4 mx-auto" />
            <p>"{testimonials[index].text}"</p>
            <p className="font-semibold mt-2">- {testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      
    </section>
  );
}
