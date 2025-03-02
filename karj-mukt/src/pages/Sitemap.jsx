import React from "react";
import { Helmet } from "react-helmet";
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaBlog, FaQuestionCircle } from "react-icons/fa";

const Sitemap = () => {
  return (
    <div className="p-10 text-gray-900 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Sitemap - Your Website</title>
        <meta name="description" content="Find all the important pages of our website easily with our sitemap." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "Sitemap",
            "url": "https://karzmukt.in/sitemap",
            "about": "A list of all the main pages on our website for easy navigation."
          })}
        </script>
      </Helmet>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Sitemap</h1>
        <p className="mb-6 text-center text-gray-600">Easily navigate through our website with the links below.</p>
        <ul className="list-none space-y-4 text-lg">
          <li className="flex items-center space-x-3">
            <FaHome className="text-blue-500" />
            <a href="/" className="text-blue-600 hover:underline">Home</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaServicestack className="text-blue-500" />
            <a href="/Services" className="text-blue-600 hover:underline">Services</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaInfoCircle className="text-blue-500" />
            <a href="/AboutUs" className="text-blue-600 hover:underline">About Us</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500" />
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Contact</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaBlog className="text-blue-500" />
            <a href="/Testimonials" className="text-blue-600 hover:underline">Blog</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaQuestionCircle className="text-blue-500" />
            <a href="/Terms" className="text-blue-600 hover:underline">FAQ</a>
          </li>
          <li className="flex items-center space-x-3">
            <FaQuestionCircle className="text-blue-500" />
            <a href="/Contact" className="text-blue-600 hover:underline">FAQ</a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sitemap;
