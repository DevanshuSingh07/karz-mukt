import { motion } from "framer-motion";
import { FaUsers, FaAward, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900">
      
      {/* Hero Section */}
      <section className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl text-center text-white max-w-3xl"
        >
          <h2 className="text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg">
            We are your trusted partner in debt relief and legal financial solutions. Our experts work tirelessly to bring financial freedom to individuals and businesses.
          </p>
        </motion.div>
      </section>

      {/* Alternating Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Left */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/mission.jpg')" }}
          ></motion.div>
          
          {/* Content Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to provide legal, ethical, and effective debt relief solutions that help our clients take control of their financial future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600">
              With our expert team and deep understanding of financial law, we deliver tailored debt solutions that secure your financial freedom.
            </p>
          </motion.div>

          {/* Image Right */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/why-choose-us.jpg')" }}
          ></motion.div>

        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-6 bg-gray-100 rounded-xl shadow-lg"
          >
            <FaUsers className="text-5xl text-[#1E3A8A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Customer First</h3>
            <p className="text-gray-600">We prioritize our clients’ needs and financial stability.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-6 bg-gray-100 rounded-xl shadow-lg"
          >
            <FaAward className="text-5xl text-[#1E3A8A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Integrity</h3>
            <p className="text-gray-600">Transparency and honesty guide our approach.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-6 bg-gray-100 rounded-xl shadow-lg"
          >
            <FaShieldAlt className="text-5xl text-[#1E3A8A] mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Legal Protection</h3>
            <p className="text-gray-600">We ensure every step adheres to legal standards.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#1E3A8A] text-white text-center">
        <h2 className="text-4xl font-bold">Take Control of Your Financial Future</h2>
        <p className="text-lg mt-4">Let us help you with expert debt solutions tailored for you.</p>
        <button className="mt-6 px-6 py-3 bg-white text-[#1E3A8A] rounded-lg font-semibold hover:bg-gray-200">
          Get a Free Consultation
        </button>
      </section>

    </div>
  );
}
