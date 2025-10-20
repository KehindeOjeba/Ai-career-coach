"use client";
import Logo from "../public/logo1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // We'll collect the user's email manually
  const [userEmail, setUserEmail] = useState<string>("");

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="bg-white shadow fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-7">
          <div>
            <Image src={Logo} alt="logo" width={100} height={100} priority />
          </div>

          {/* Replaced Clerk Buttons with a simple email form */}
          <div className="flex items-center gap-3">
            {userEmail ? (
              <div className="text-gray-600 text-sm font-medium">
                Signed in as <span className="font-semibold">{userEmail}</span>
              </div>
            ) : (
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = (e.target as HTMLFormElement).email as HTMLInputElement;
                  setUserEmail(input.value);
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700 transition"
                >
                  Get Started
                </button>
              </form>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#4c4d5b] text-white pt-52 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your AI-Powered Career Coach — Anytime, Anywhere
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get instant, personalized career advice, resume feedback, and interview preparation from your AI assistant.
          </motion.p>

          <motion.a
            href="/dashboard"
            className="inline-block bg-red-500 px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start A Free Trial
          </motion.a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resume Feedback",
                desc: "Get AI-powered suggestions to improve your resume instantly.",
              },
              {
                title: "Career Path Guidance",
                desc: "Discover the best career moves for your skills.",
              },
              {
                title: "Job Market Insights",
                desc: "Stay updated on the latest trends and opportunities.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition border border-red-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} AI Career Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
