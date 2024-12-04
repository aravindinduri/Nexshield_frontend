import React, { useState } from "react";
import axios from 'axios';
import DashBoad from "./DashBoard";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        "Content-type": "application/json",
      },
    };
    const response = await axios.post('https://nexshield-server.onrender.com/api/login', formData,config);

    
    toast("Login successful!");
    

    // Extracting the data object from the response
    const { data } = response;  // This will give you the object with email, token, and _id

    console.log('User data:', data);
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isLoggedIn", true);
    navigate("/app/Dashboard");
  } catch (error) {
    
    if(error.status === 401){
      toast("Invalid username or password");
    }

    console.error('Error during login:', error);
  }
  
}

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
    <ToastContainer/>
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('./src/assets/LooperBG.png')" }}
    >
      <div className="w-full max-w-md bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>
        {errors && <p className="text-red-500 text-center mb-4">{errors}</p>}
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
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
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold transition"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-white">
            Don't have an Account?{" "}
            <a href="./register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}


export default Login;
