import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/Form";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 text-center bg-blue-900 text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-90">We are here to help you. Contact us for any queries or assistance.</p>
        </motion.div>
        <motion.img 
          src="/assets/contact-illustration.png" 
          alt="Contact Us Illustration" 
          className="w-full max-w-lg mx-auto mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <FaPhoneAlt className="text-3xl text-blue-800 mx-auto mb-4" />, 
            title: "Phone", 
            detail: "+91 9876543210"
          }, {
            icon: <FaEnvelope className="text-3xl text-blue-800 mx-auto mb-4" />, 
            title: "Email", 
            detail: "support@karzmukt.com"
          }, {
            icon: <FaMapMarkerAlt className="text-3xl text-blue-800 mx-auto mb-4" />, 
            title: "Office", 
            detail: "Mumbai, India"
          }].map((contact, index) => (
            <motion.div key={index} 
              whileHover={{ scale: 1.05 }} 
              className="p-6 shadow-md rounded-lg bg-white"
            >
              {contact.icon}
              <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
              <p>{contact.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <p className="text-lg opacity-80 mb-8">Our team will get back to you as soon as possible.</p>
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}
