import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services - Debt Solutions";
  }, []);

  const packages = [
    { title: "Basic Consultation Package", price: "₹349 (Limited-Time Offer!)", description: "One-time payment. Personalized debt assessment, creditor harassment guidance, settlement options, and general legal advice." },
    { title: "Debt Settlement & Financial Planning Package", price: "₹2,999", description: "Monthly services. Full debt assessment, creditor negotiations, customized financial strategy, and legal guidance." },
    { title: "Legal Protection & Notice Handling Package", price: "₹4,999", description: "Monthly services. Legal response to notices, complaints against unethical recovery, legal representation, and financial institution dealings." },
    { title: "Premium Debt Resolution & Legal Support Package", price: "₹9,999", description: "Monthly services. End-to-end debt settlement, creditor communication handling, legal representation, and ongoing expert consultation." },
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
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Packages – Affordable Debt Relief & Legal Support</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-8">
          At Karz-Mukt, we offer affordable and transparent pricing to help you manage your debt settlement, creditor harassment, and legal issues. Choose the package that best suits your financial needs and get expert guidance from our debt resolution and legal professionals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
  {packages.map((pkg, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.08 }}
      className="relative flex flex-col items-center border border-gray-300 rounded-2xl shadow-xl bg-white p-10 hover:shadow-2xl transition duration-300 w-full max-w-[400px] mx-auto"
    >
      {/* Orange Ribbon */}
      <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-semibold px-4 py-1 transform -rotate-45 -translate-x-4 translate-y-3 shadow-md">
        Best Offer
      </div>

      {/* Header Section */}
      <div className="w-full bg-[#0D9488] text-white text-center py-5 rounded-t-2xl">
        <h3 className="text-3xl font-bold">{pkg.title}</h3>
      </div>

      {/* Price Section */}
      <p className="text-4xl font-bold text-gray-900 mt-6">{pkg.price}</p>
      <p className="text-gray-500 text-sm">per session/month</p>

      {/* Feature List */}
      <ul className="text-gray-700 text-lg space-y-3 my-8 list-none text-left w-full px-6">
        {pkg.description.split("\n").map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-green-500 text-2xl">✔</span> {point}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button className="w-full bg-[#0D9488] hover:bg-[#0B766E] text-white py-4 text-xl font-semibold rounded-lg shadow-md transition-all duration-300">
        Book Now
      </Button>
    </motion.div>
  ))}
</div>


      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Karz-Mukt?</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p className="mb-4">✔ Affordable & Transparent Pricing – No hidden charges!</p>
          <p className="mb-4">✔ Expert Debt & Legal Consultants – Professional support at every step</p>
          <p className="mb-4">✔ Confidential & Secure Assistance – Your privacy is our priority</p>
          <p>✔ Proven Debt Relief Strategies – Helping clients achieve financial freedom</p>
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

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">📞 Get Started Today!</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">Choose your package and take the first step toward a debt-free life with Karz-Mukt!</p>
        <Button className="bg-[#0D9488] hover:bg-[#0B766E] text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
          Get Free Consultation
        </Button>
      </section>
    </div>
  );
}
