import { motion } from "framer-motion";
import ContactForm from "./Form"; // Ensure your ContactForm component exists

export default function ContactSection() {
  return (
    <section className="contact-div bg-white ">
      <h1 className="text-center text-4xl ">Get In Touch</h1>
    <div className="flex flex-col md:flex-row items-center bg-white justify-center gap-8 py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
     
  
      {/* image box on wide screen */}
      <div className="h-[500px] relative w-1/2 xsm:hidden md:block">
       <div className="absolute -right-44 xsm:hidden md:block">
       <motion.img
         src="Fimg.png"
         className="h-[500px] w-full xsm:hidden md:block"
        ></motion.img>
       </div>
      </div>

       {/* Contact Form Box */}
       
        <ContactForm />
      
    </div>
    </section>
  );
}
