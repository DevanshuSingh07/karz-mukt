import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services - Debt Solutions";
  }, []);

  const packages = [
    { title: "1 Hour Consultation", price: "₹500", description: "Get expert legal advice on handling debt situations." },
    { title: "Monthly Plan", price: "₹5000", description: "We deal with recovery agents and provide legal guidance." },
    { title: "Full Settlement Assistance", price: "₹15,000", description: "Comprehensive support for negotiating your debt settlement." },
  ];

  return (
    <div className="relative min-h-screen bg-[#F3F4F6] text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 md:px-8 lg:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Professional Debt Settlement Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base md:text-lg mb-6 max-w-xl"
        >
          Choose from our affordable packages to resolve your financial difficulties.
        </motion.p>
        <Button className="bg-[#0D9488] hover:bg-[#0B766E] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
          Get Free Consultation
        </Button>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 shadow-md rounded-lg bg-[#F3F4F6] cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-lg text-[#1E3A8A] font-bold">{pkg.price}</p>
              <p className="mt-2">{pkg.description}</p>
              <Button className="mt-4 bg-[#0D9488] hover:bg-[#0B766E] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p className="mb-4">We provide expert legal assistance to help you navigate the complexities of debt settlement.</p>
          <p className="mb-4">Our team negotiates with banks and financial institutions to ensure you get the best possible outcome.</p>
          <p>100% confidential, stress-free, and results-driven service.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 shadow-md rounded-lg bg-[#F3F4F6] mb-6">
            <p className="italic">"This service saved me from financial ruin! Highly recommended."</p>
            <p className="mt-2 font-semibold">- Rajesh K.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 shadow-md rounded-lg bg-[#F3F4F6]">
            <p className="italic">"Professional, fast, and effective! I finally have peace of mind."</p>
            <p className="mt-2 font-semibold">- Priya S.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
