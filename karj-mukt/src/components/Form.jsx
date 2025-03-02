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
      className="frame bg-white overflow-auto p-6 md rounded-large xsm:w-[370px] md:w-[500px] md:border-solid md:border-[#0D9488] md:border-4 z-10 shadow-lg"
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
     
  <iframe
    aria-label="KM-Contact-form"
    frameBorder="0"
    className="w-full h-full border-none"
    src="https://forms.zohopublic.in/certifymyhealth/form/KMContactform/formperma/dmlSnwXsotzQjU5zGzcLluqHGqCoMvvKMxBK4P5L52Q"
    style={{ overflow: "hidden", height:"500px", width:"500px" }} // Ensures no scrollbars inside iframe
  ></iframe>

    </motion.div>
  );
}