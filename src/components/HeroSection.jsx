import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-x-0 bottom-0 h-full bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('./src/assets/LooperBG.png')", 
          backgroundSize: "cover", 
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Gradient Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          Get The Fastest Update
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white">
          At <span className="text-white">NEXSHEILD</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        Stay Ahead of Threats
        Automated vulnerability alerts straight from OEMs, delivered to your inbox for proactive protection.
        </p>

        {/* Subscribe Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



