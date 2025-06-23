import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-black shadow-lg shadow-[0_0_15px_2px_rgba(255,255,255,0.4)]" : "bg-black shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between h-[80px]">
        <Link to="/">
          <div className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition-all duration-300">
            NexShield
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-all duration-300"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="User menu"
              >
                <FontAwesomeIcon icon={faUser} className="text-gray-300 w-6 h-6" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-gray-300 rounded-lg shadow-lg transition-all duration-300">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to='/login'>
                <button
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Sign In
                </button>
              </Link>

              <Link to='/register'>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
