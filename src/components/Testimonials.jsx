import React, { useRef } from "react";

const Testimonials = () => {
  // Reference for the testimonials container
  const testimonialsRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    testimonialsRef.current.scrollBy({
      left: -400, // Adjust this value to match your card width
      behavior: "smooth",
    });
  };

  // Scroll to the right
  const scrollRight = () => {
    testimonialsRef.current.scrollBy({
      left: 400, // Adjust this value to match your card width
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-bold text-center text-gray-100 mb-16">
          What Our Users Say
        </h2>
        <div className="relative">
          {/* Testimonials Slider */}
          <div
            className="flex gap-10 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
            ref={testimonialsRef} // Attach the ref
          >
            {[
              {
                name: "Alice Johnson",
                feedback:
                  "NEXSHEILD has transformed the way I manage vulnerabilities. The alerts are always timely and actionable!",
                profileImg: "https://rb.gy/3iesh2",
                role: "Cybersecurity Expert",
              },
              {
                name: "Sophia Lee",
                feedback:
                  "With NEXSHEILD, I can sleep peacefully knowing my systems are secure. Best decision I've made!",
                profileImg: "https://rb.gy/gwea48",
                role: "Freelance Developer",
              },
              {
                name: "Mark Williams",
                feedback:
                  "A game-changer for our team! The proactive notifications have helped us mitigate threats efficiently.",
                profileImg: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "IT Manager",
              },
              {
                name: "Liam Carter",
                feedback:
                  "The user interface is clean, and the analytics are straightforward. Highly recommend NEXSHEILD to startups.",
                profileImg: "https://rb.gy/qgbfyg",
                role: "Startup Founder",
              },
              {
                name: "Emma Wilson",
                feedback:
                  "NEXSHEILD's support team is top-notch. They helped us resolve a critical vulnerability within hours.",
                profileImg: "https://rb.gy/gwea48",
                role: "Tech Support Specialist",
              },
              {
                name: "Noah Davis",
                feedback:
                  "The insights provided by NEXSHEILD are unparalleled. It's become an indispensable tool for us.",
                profileImg: "https://rb.gy/geczzv",
                role: "System Administrator",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[400px] max-w-[450px] flex-shrink-0 bg-gray-800 rounded-xl shadow-2xl p-8 snap-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={testimonial.profileImg}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-500"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-md text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-lg text-gray-300 italic">
                  "{testimonial.feedback}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={scrollLeft} // Attach scrollLeft handler
              className="bg-gray-700 p-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={scrollRight} // Attach scrollRight handler
              className="bg-gray-700 p-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
