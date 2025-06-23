import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setErrors("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors("Passwords do not match!");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://nexshield-server.onrender.com/api/register/",
        formData,
        config
      );

      const { data } = response;
      localStorage.setItem("userData", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Registration successful!");
      navigate("/Dashboard");
    } catch (error) {
      const errMsg =
        error.response?.data?.message || "Registration failed. Try again.";
      toast.error(errMsg);
      console.error("Registration error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-black"
        style={{ backgroundImage: "url('../../public/LooperBG.png')" }} // ensure image is in /public
      >
        <div className="w-full max-w-md bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Register
          </h2>

          {errors && (
            <p className="text-red-500 text-center mb-4 font-medium">{errors}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 outline-none"
                autoComplete="off"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 outline-none"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 bg-gray-700 text-white rounded focus:ring-2 focus:ring-blue-500 outline-none"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold transition"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-white">
              Already have an Account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
