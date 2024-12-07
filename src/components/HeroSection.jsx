import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
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

      {/* About Section */}
      <section className="py-12 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            About <span className="text-blue-500">NEXSHEILD</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            At NEXSHEILD, we prioritize your security by delivering real-time
            vulnerability alerts straight from Original Equipment Manufacturers
            (OEMs). Our mission is to empower individuals and organizations
            with timely updates to safeguard their digital assets effectively.
          </motion.p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Equifax Data Breach (2017)",
                description:
                  "A late patch for an Apache Struts vulnerability led to the exposure of personal data of 147 million users, costing Equifax over $700M in fines.",
              },
              {
                title: "WannaCry Ransomware (2017)",
                description:
                  "Exploiting a known SMB vulnerability, WannaCry caused damage to over 200,000 computers globally. Timely alerts could have mitigated the attack.",
              },
              {
                title: "Heartbleed Vulnerability (2014)",
                description:
                  "The delay in addressing the OpenSSL flaw allowed attackers to intercept sensitive data from millions of servers worldwide.",
              },
              {
                title: "Log4Shell Exploit (2021)",
                description:
                  "This critical vulnerability in Log4j affected millions of devices. Proactive patching could have averted widespread attacks.",
              },
              {
                title: "SolarWinds Hack (2020)",
                description:
                  "State-sponsored actors exploited unpatched vulnerabilities to infiltrate critical systems worldwide.",
              },
              {
                title: "Marriott Data Breach (2018)",
                description:
                  "Personal details of over 500 million customers were exposed due to delayed remediation of security flaws.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-100">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-400 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
