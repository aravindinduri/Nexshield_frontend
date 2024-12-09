import React from 'react'
import { motion } from "framer-motion";

function About() {
  return (
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
  )
}

export default About
