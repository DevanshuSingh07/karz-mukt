import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 md:p-12 text-white bg-[#1E3A8A] rounded-lg shadow-lg border-4 border-[#0D9488]"
    >
      <motion.h1 
        className="text-3xl font-bold text-center mb-6 text-[#0D9488]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Privacy Policy – Karz-Mukt
      </motion.h1>
      
      <motion.p 
        className="text-center text-sm text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Effective Date: [Insert Date]
      </motion.p>
      
      <motion.p 
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        At Karz-Mukt, we are committed to protecting your privacy and ensuring that your personal
        information is handled securely and responsibly. This Privacy Policy explains how we collect,
        use, store, and protect your data when you use our website and services.
      </motion.p>

      <motion.h2 className="text-xl font-semibold mt-6 text-[#0D9488]">1. Information We Collect</motion.h2>
      <p className="mt-2 font-medium">A. Personal Information</p>
      <ul className="list-disc list-inside text-gray-300">
        <li>Name, email address, phone number</li>
        <li>Billing and payment details</li>
        <li>Address and identification details (if required for legal services)</li>
      </ul>

      <p className="mt-2 font-medium">B. Financial Information</p>
      <ul className="list-disc list-inside text-gray-300">
        <li>Loan details, outstanding debt, and repayment history</li>
        <li>Creditor-related information for debt settlement services</li>
      </ul>

      <p className="mt-2 font-medium">C. Technical Information</p>
      <ul className="list-disc list-inside text-gray-300">
        <li>IP address, device details, and browser type</li>
        <li>Cookies and tracking data for improving website experience</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-300">
        <li>✅ Provide Debt Settlement & Legal Services – Process your case, negotiate with creditors, and offer legal guidance.</li>
        <li>✅ Prevent Unauthorized Use – Ensure secure transactions and verify your identity.</li>
        <li>✅ Improve Our Services – Enhance user experience based on feedback and analytics.</li>
        <li>✅ Legal Compliance – Adhere to RBI regulations and consumer protection laws.</li>
        <li>✅ Marketing & Communication – Send you service updates, offers, and newsletters (you can opt-out anytime).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">3. Data Protection & Security</h2>
      <ul className="list-disc list-inside text-gray-300">
        <li>🔹 Encryption & Secure Servers – Your personal and financial details are stored securely.</li>
        <li>🔹 Restricted Access – Only authorized personnel have access to sensitive data.</li>
        <li>🔹 No Data Sharing Without Consent – We do not sell, rent, or share your information with third parties, except as required by law.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">4. Cookies & Tracking Technologies</h2>
      <p className="mt-2">We use cookies to improve website functionality and user experience. You can manage cookie preferences through your browser settings.</p>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">5. Third-Party Services</h2>
      <p className="mt-2">We may use payment gateways, analytics tools, and legal partners to provide our services. These third parties have their own privacy policies, and we ensure they follow strict security standards.</p>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">6. Your Rights & Choices</h2>
      <ul className="list-disc list-inside text-gray-300">
        <li>Access & Update Data: You can request a copy of your data or update incorrect information.</li>
        <li>Opt-Out of Marketing: Unsubscribe from emails and promotional messages anytime.</li>
        <li>Request Data Deletion: You can ask us to delete your personal data, subject to legal and service requirements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">7. Changes to This Privacy Policy</h2>
      <p className="mt-2">We may update this policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>

      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">8. Contact Us</h2>
      <p className="mt-2">For any questions or concerns regarding your privacy, please contact:</p>
      <ul className="list-disc list-inside text-gray-300">
        <li>📧 Email: [********]</li>
        <li>📞 Phone: [*********]</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6 text-[#0D9488]">9. Disclaimer</h2>
      <p className="mt-2">This Privacy Policy is intended to provide transparency on how we handle your data. However, this document does not constitute legal advice. Users are encouraged to review our terms of service and consult legal professionals if necessary.</p>
      
      <motion.p 
        className="mt-6 text-center font-medium text-[#0D9488]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Karz-Mukt – Your Trusted Partner in Debt Relief & Legal Protection
      </motion.p>
    </motion.div>
  );
}
