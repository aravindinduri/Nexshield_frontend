import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors("All fields are required!");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await axios.post('https://nexshield-server.onrender.com/api/login', formData, config);

      toast.success("Login successful!");

      const { data } = response;
      console.log('User data:', data);
      localStorage.setItem("userData", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", true);
      navigate("/app/Dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
      console.error('Error during login:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <ToastContainer />
      <div
        className="min-h-screen flex items-center bg-black justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./src/assets/LooperBG.png')" }}
      >
        <div className="w-full max-w-md bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-lg">
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Login
          </h2>

          {errors && <p className="text-red-500 text-center mb-4">{errors}</p>}

          <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
            
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-gray-300 text-sm">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-all duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-300">
              Don't have an account?
              <Link to='/register' className="text-blue-500 font-semibold hover:text-blue-700">
                Register
                </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
