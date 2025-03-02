import React from "react";
import { Helmet } from "react-helmet";
import { FaFileContract, FaUserShield, FaHandshake, FaMoneyBillWave, FaLock, FaGavel, FaFileSignature, FaExclamationTriangle, FaPhone } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="p-10 text-gray-900 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Terms & Conditions - Karz-Mukt</title>
        <meta name="description" content="Read the terms and conditions of using Karz-Mukt's debt settlement and legal consultation services." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center">
          <FaFileContract className="mr-3" /> Terms & Conditions
        </h1>
        <p className="text-center text-gray-600 mb-6">Effective Date: [Insert Date]</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaUserShield className="mr-2" /> 1. Definitions
            </h2>
            <p>"Company" refers to Karz-Mukt, which provides debt settlement, legal consultation, and financial advisory services.</p>
            <p>"User" or "Client" refers to any individual or entity using our services.</p>
            <p>"Services" refer to debt settlement, creditor harassment handling, legal consultation, and notice reply assistance provided by Karz-Mukt.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaHandshake className="mr-2" /> 2. Scope of Services
            </h2>
            <p>We provide financial advisory, debt settlement assistance, and legal support for loan defaults and creditor harassment cases.</p>
            <p>Our services do not guarantee debt waivers, loan approvals, or legal case dismissals, as outcomes depend on multiple external factors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaMoneyBillWave className="mr-2" /> 3. Payment & Refund Policy
            </h2>
            <p>Payments must be made in full and in advance for all services.</p>
            <p>Refunds are subject to our Refund & Cancellation Policy and are not provided once services have been rendered.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaLock className="mr-2" /> 4. Confidentiality & Data Protection
            </h2>
            <p>We maintain strict confidentiality of all user information as per our Privacy Policy.</p>
            <p>Users must not share our confidential strategies, negotiation details, or legal documents with third parties without written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaGavel className="mr-2" /> 5. Legal Compliance & Limitation of Liability
            </h2>
            <p>Karz-Mukt operates within legal guidelines and does not support unethical debt avoidance strategies.</p>
            <p>We are not responsible for any legal actions taken by creditors, financial institutions, or third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaFileSignature className="mr-2" /> 6. Amendments to Terms
            </h2>
            <p>Karz-Mukt reserves the right to modify these Terms & Conditions at any time. Updates will be posted on our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold flex items-center text-blue-600">
              <FaPhone className="mr-2" /> 7. Contact Us
            </h2>
            <p>📧 Email: [karzmukt.km@gmail.com]</p>
            <p>📞 Phone: [**********]</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
