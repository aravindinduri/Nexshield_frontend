import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import About from "./About";
import ContactSection from "./ContactSection";
const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url('./src/assets/LooperBG.png')",
            backgroundSize: "cover",
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <motion.div
          className="relative z-10 text-center px-6 md:px-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Get The Fastest Update
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            At <span className="text-white">NEXSHEILD</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Stay Ahead of Threats. Automated vulnerability alerts straight from
            OEMs, delivered to your inbox for proactive protection.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link to='/register'>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
                Subscribe Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <About/> 
      <div
        className="h-64 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('./src/assets/cyber.jpeg')",
        }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">
            Stay Ahead of Cybersecurity Threats
          </h2>
        </div>
      </div>
      <Testimonials/>
 <ContactSection/>
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white text-2xl font-bold">NEXSHEILD</h3>
              <p className="mt-2 text-sm text-gray-400 max-w-sm">
                Stay ahead of vulnerabilities with NEXSHEILD, your trusted
                partner for automated threat updates and proactive security
                solutions.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Instagram
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NEXSHEILD. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;
