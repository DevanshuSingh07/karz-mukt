import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import SEO from "../components/Seo";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Debt Settlement: A Complete Guide",
    excerpt: "Debt settlement can be a powerful tool to regain financial freedom. Learn how it works, the benefits, and things to consider before opting for it.",
    image: "/images/debt-settlement.jpg",
    date: "March 2, 2025",
  },
  {
    id: 2,
    title: "How to Negotiate with Creditors for Debt Reduction",
    excerpt: "Negotiating with creditors can lead to reduced debt and better repayment terms. Discover expert tips on how to do it effectively.",
    image: "/images/negotiation.jpg",
    date: "February 20, 2025",
  },
  {
    id: 3,
    title: "Legal Rights Every Debtor Should Know",
    excerpt: "Know your legal rights when dealing with debt collectors and financial institutions. Understanding these rights can protect you from unfair practices.",
    image: "/images/legal-rights.jpg",
    date: "February 10, 2025",
  },
];

export default function BlogPage() {
  const [posts] = useState(blogPosts);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16 lg:px-32">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-[#1E3A8A] mb-12"
      >
        Latest Blog Posts
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500 mt-3">{post.date}</p>
              <Link
                to={`/blog/${post.id}`}
                className="mt-4 inline-block text-[#1E3A8A] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <SEO/>
    </div>
    
  );
}
