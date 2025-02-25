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
//   {
//     question: "Do I need to stop paying my creditors?",
//     answer: "In some cases, a temporary pause in payments may be needed to initiate negotiations, but we guide you on the best approach.",
//   },
//   {
//     question: "What are the fees for your services?",
//     answer: "We charge a success-based fee, meaning you only pay once we successfully reduce your debt.",
//   },
//   {
//     question: "Can I settle multiple debts at once?",
//     answer: "Yes, we can negotiate with multiple lenders simultaneously to help you become debt-free faster.",
//   },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white hover:bg-[#1E3A8A] shadow-md rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 hover:text-white focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden text-left px-4 pb-4  hover:text-white"
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
