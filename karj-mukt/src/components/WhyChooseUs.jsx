import { FaShieldAlt, FaGavel, FaClock, FaUserShield, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt size={28} />,
    title: "Experienced Debt Negotiators & Legal Advisors",
    desc: "Our team of experts ensures the best possible settlements with banks and creditors."
  },
  {
    icon: <FaGavel size={28} />,
    title: "Dedicated Para-Legal Team",
    desc: "We handle legal notices, paperwork, and court procedures to protect your rights."
  },
  {
    icon: <FaClock size={28} />,
    title: "24/7 Customer Support",
    desc: "Our dedicated team is available round the clock to assist you with any queries."
  },
  {
    icon: <FaUserShield size={28} />,
    title: "Protection Against Harassment",
    desc: "We safeguard you from unethical creditor harassment and unlawful recovery practices."
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Affordable & Confidential",
    desc: "We offer cost-effective services while ensuring complete confidentiality and trust."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
      >
        Why Choose <span className="text-blue-700">Karz-Mukt?</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-left flex items-start space-x-4"
          >
            <div className="text-blue-700">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
