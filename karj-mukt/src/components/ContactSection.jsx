import { motion } from "framer-motion";
import ContactForm from "./Form"; // Ensure your ContactForm component exists

export default function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
     

      {/* Empty Box (Customizable) */}
      <div className="h-[500px] relative w-full">
       <div className="absolute -right-10 w-full">
       <motion.img
         src="Fimg.png"
         className="h-[500px] w-full"
        ></motion.img>
       </div>
      </div>

       {/* Contact Form Box */}
       <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 bg-white p-8 rounded-lg mx-10"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Fill out the form below, and we’ll get back to you shortly.</p>
        <ContactForm />
      </motion.div>
    </section>
  );
}
