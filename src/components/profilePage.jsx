import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [userDetails, setUserDetails] = useState({
    organizationName: "Tech Innovators",
    description: "Building futuristic solutions for real-world problems.",
    preferences: "AI, Machine Learning, Web Development",
  });

  const [formDetails, setFormDetails] = useState(userDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSave = () => {
    setUserDetails(formDetails);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "80%",
          maxWidth: "600px",
          background: "linear-gradient(145deg, #1f1f21, #28282b)",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.8)",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="https://via.placeholder.com/600x200.png?text=Organization+Logo"
          alt="Organization Logo"
          sx={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: 2,
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            User Profile
          </Typography>

          {isEditing ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 2,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
                }}
              >
                Edit Profile
              </Typography>
              <TextField
                label="Organization Name"
                variant="outlined"
                fullWidth
                name="organizationName"
                value={formDetails.organizationName}
                onChange={handleInputChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                name="description"
                value={formDetails.description}
                onChange={handleInputChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <TextField
                label="Email Preferences (Keywords)"
                variant="outlined"
                fullWidth
                name="preferences"
                value={formDetails.preferences}
                onChange={handleInputChange}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleSave}
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  "&:hover": { backgroundColor: "#0056b3" },
                  borderRadius: "5px",
                }}
              >
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 1,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
                }}
              >
                Organization Name:
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
                }}
              >
                {userDetails.organizationName}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 1,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
                }}
              >
                Description:
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
                }}
              >
                {userDetails.description}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 1,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.6)",
                }}
              >
                Email Preferences:
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
                }}
              >
                {userDetails.preferences}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setIsEditing(true)}
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  "&:hover": { backgroundColor: "#0056b3" },
                  borderRadius: "5px",
                }}
              >
                Update Profile
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
