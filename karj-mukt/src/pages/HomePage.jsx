import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaQuoteLeft } from "react-icons/fa";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function HomePage() {
  useEffect(() => {
    document.title = "KarzMukt - Settle Your Debts Legally";
  }, []);
  
  return (
    <div className="relative min-h-screen bg-[#F3F4F6] text-gray-900">
      {/* Carousel Section */}
      <div className="w-full mx-auto px-4 md:px-8 ">
        <Carousel />
      </div>
      
      {/* Hero Section
      <section className="hero min-h-screen flex flex-col justify-center items-center text-center text-[#1E3A8A] px-6 md:px-12 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Get Legal Debt Settlement Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl"
        >
          Professional help to negotiate with banks and financial institutions for your loan settlements.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-[#0D9488] hover:bg-[#0B766E] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
            Get Free Consultation
          </Button>
        </motion.div>
      </section> */}
      
      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: <FaBalanceScale className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Legal Consultation", 
            description: "Expert legal advice on how to manage your debt and avoid legal actions."
          }, {
            icon: <FaHandshake className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Debt Settlement", 
            description: "We negotiate with banks and lenders to get you the best possible settlement."
          }, {
            icon: <FaShieldAlt className="text-5xl text-[#1E3A8A] mx-auto mb-4" />, 
            title: "Protection from Legal Action", 
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
      <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="text-lg italic max-w-2xl mx-auto">
          <FaQuoteLeft className="text-4xl text-gray-600 mb-4 mx-auto" />
          <p>"Debt Solutions helped me negotiate my loan settlement, saving me thousands!"</p>
          <p className="font-semibold mt-2">- Rahul Sharma</p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="text-lg max-w-3xl mx-auto">
          <p className="font-semibold">Q: How does debt settlement work?</p>
          <p className="mb-4">A: Our experts negotiate with banks on your behalf to reduce your outstanding balance.</p>
          <p className="font-semibold">Q: Will settling my debt affect my credit score?</p>
          <p>A: Debt settlement may impact your credit score, but we provide strategies to recover quickly.</p>
        </div>
      </section>
    </div>
  );
}
