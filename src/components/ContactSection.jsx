import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-40 w-[300%] h-[300%] top-[-50%] left-[-100%] animate-pulse-slow"></div>
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-100 tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Connect to the <span className="text-blue-500 neon-glow">Future</span>
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-gray-300 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Step into tomorrow by sharing your ideas, feedback, or questions.
                    We're here to build the future with you.
                </motion.p>

                <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-blue-500/30 backdrop-blur-md">
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner-glow"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner-glow"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-gray-400 text-sm mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner-glow"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-gray-400 text-sm mb-2">
                                Message
                            </label>
                            <textarea
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner-glow"
                                placeholder="Your Message"
                                rows="6"
                            ></textarea>
                        </div>
                            <div className="mt-8 text-center">
                                <button
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>


                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
