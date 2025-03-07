
import { motion } from "framer-motion";
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaQuoteLeft } from "react-icons/fa";
import Carousel from "../components/Carousel";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";
import SEO from "../components/Seo";

export default function HomePage() {
  
  
  return (
    <div className="relative min-h-screen bg-[#F3F4F6] text-gray-900">
      {/* Carousel Section */}
      <div className="w-full mx-auto px-4 md:px-8 ">
        <Carousel />
      </div>
      
      
      {/* offer section*/}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          First Consultation at Just <span className="text-yellow-300">₹349!</span> Book Now
        </h2>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Book a personalized debt assessment and legal consultation for just ₹349{" "}
          <span className="line-through opacity-70">₹500</span>.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/book-consultation"
            className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 md:px-8 rounded-full text-lg md:text-xl shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            Book Now
          </Link>
        </motion.div>
      </motion.div>
    </section>

    {/*whychooseUs*/}
    <WhyChooseUs/>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: <FaBalanceScale className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Legal Consultation And Support", 
            description: "Expert legal advice on how to manage your debt and avoid legal actions."
          }, {
            icon: <FaHandshake className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Call Harassment Handling", 
            description: "We negotiate with banks and lenders to get you the best possible settlement."
          }, {
            icon: <FaShieldAlt className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Debt Negotiations And Settlement", 
            description: "Prevent legal cases and protect your financial interests."
          }].map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 shadow-md rounded-lg bg-[#F3F4F6]">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Testimonials Section */}
     <Testimonials/>
     <ContactSection/>
     
      <FAQSection/>
      <SEO/>
    </div>
  );
}
