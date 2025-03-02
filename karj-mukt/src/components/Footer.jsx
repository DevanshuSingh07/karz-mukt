import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./Form"; // Ensure ContactForm exists
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">KarzMukt</h2>
          <p className="text-sm opacity-80">
            Providing expert debt solutions and legal consultation to help you achieve financial freedom.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#0D9488] transition-all duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-[#0D9488] transition-all duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-[#0D9488] transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#0D9488] transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-[1rem] font-medium">
            <li><Link to="/services" className="hover:text-[#0D9488] transition-all duration-300">Services</Link></li>
            <li><Link to="/AboutUs" className="hover:text-[#0D9488] transition-all duration-300">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:text-[#0D9488] transition-all duration-300">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-[#0D9488] transition-all duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Resources & FAQs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Resources</h3>
          <ul className="space-y-3 text-[1rem] font-medium">
            <li><Link to="/faqs" className="hover:text-[#0D9488] transition-all duration-300">FAQs</Link></li>
            <li><Link to="/blog" className="hover:text-[#0D9488] transition-all duration-300">Debt Management Tips</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#0D9488] transition-all duration-300">Privacy Policy</Link></li>
            <li><Link to="/Terms" className="hover:text-[#0D9488] transition-all duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="text-[1rem] font-medium space-y-3">
            <p className="flex items-center space-x-2"><FaMapMarkerAlt /> <span>123 Finance Street, Mumbai, India</span></p>
            <p className="flex items-center space-x-2"><FaPhone /> <span>+91 98765 43210</span></p>
            <p className="flex items-center space-x-2"><FaEnvelope /> <span>support@karzmukt.com</span></p>
          </div>
        </div>
      </div>
      

      {/* Copyright & Branding */}
      <div className="text-center border-t border-white mt-12 pt-4 text-sm opacity-80">
        &copy; {new Date().getFullYear()} KarzMukt. All Rights Reserved.
        <p className="mt-1">Designed by <span className="font-bold">Devanshu Singh</span></p>
      </div>
    </footer>
  );
}
