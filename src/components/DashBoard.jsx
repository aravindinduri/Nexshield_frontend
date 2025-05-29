import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import VulnerabilityList from "./VulerabilityList";

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard bg-gray-900 min-h-screen">
      <Navbar />
      <VulnerabilityList />
    </div>
  );
};

export default DashBoard;
