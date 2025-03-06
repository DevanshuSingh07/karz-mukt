import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does debt settlement work?",
    answer: "Our experts negotiate with banks on your behalf to reduce your outstanding balance.",
  },
  {
    question: "Will settling my debt affect my credit score?",
    answer: "Debt settlement may impact your credit score, but we provide strategies to recover quickly.",
  },
  {
    question: "How long does the debt settlement process take?",
    answer: "The process usually takes 3-6 months, depending on your debt amount and negotiations with lenders.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition-all focus:outline-none"
              aria-expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={false}
              animate={{ maxHeight: openIndex === index ? 200 : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden px-4 pb-4 text-gray-700"
            >
              <p className="leading-relaxed">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
