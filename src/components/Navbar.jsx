import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

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
    navigate("/login");
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");
  };

  const handleSignIn = () => {
    navigate("./login");
  };

  const handleSignUp = () => {
    navigate("./register");
  };

  const handleLogoClick = () => {
    navigate("./dashboard");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      } transition duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          NexShield
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {!isLoggedIn && (
            <>
              <a href="./dashboard" className="text-gray-300 hover:text-blue-400">
                Home
              </a>
              <a href="app/profile" className="text-gray-300 hover:text-blue-400">
                Profile
              </a>
            </>
          )}
        </div>

        {/* Profile Icon or Sign In/Sign Up */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white"
              >
                <i className="fas fa-user"></i>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-gray-300 rounded-lg shadow-lg">
                  <a
                    href="./profile"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </>
          )}

          {/* Hamburger Icon for Mobile */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-gray-400"></span>
              <span className="block w-8 h-1 bg-gray-400"></span>
              <span className="block w-8 h-1 bg-gray-400"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black">
          {!isLoggedIn ? (
            <>
              <a href="./dashboard" className="block px-4 py-2 text-gray-300">
                Home
              </a>
              <a href="./profile" className="block px-4 py-2 text-gray-300">
                Profile
              </a>
            </>
          ) : null}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
