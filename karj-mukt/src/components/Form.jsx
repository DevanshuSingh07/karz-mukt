import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A8A]"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A8A] h-32"
          required
        ></textarea>
        <Button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#0D9488] text-white py-3 text-lg font-semibold rounded-lg shadow-md">
          Send Message
        </Button>
      </form> */}
      <iframe aria-label='KM-Contact-form' frameborder="0" style={{height:"500px",width:"99%",border:"none",}} src='https://forms.zohopublic.in/certifymyhealth/form/KMContactform/formperma/dmlSnwXsotzQjU5zGzcLluqHGqCoMvvKMxBK4P5L52Q'></iframe>
    </motion.div>
  );
}