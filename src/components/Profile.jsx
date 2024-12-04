import { useEffect } from "react";
import Navbar from "./NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from "./profilePage";
import { Box } from "@mui/material";

const Profile = () => {
  useEffect(() => {
    toast.success("Welcome to your profile!", {
      position: "top-center", // Updated to use string instead of POSITION constant
      theme: "dark",
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle, rgba(15,15,15,1) 60%, rgba(30,30,35,1) 100%)",
        animation: "glow 5s infinite alternate",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <ProfilePage />
      <ToastContainer />
      <style>
        {`
        @keyframes glow {
          0% {box-shadow: 0 0 30px #ff004c, 0 0 60px #ff004c;}
          100% {box-shadow: 0 0 30px #0066ff, 0 0 60px #0066ff;}
        }
        `}
      </style>
    </Box>
  );
};

export default Profile;
