import React from "react";
import {
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const EditProfile = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: "auto" }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Edit Profile</Typography>
      </Box>

      {/* Avatar and Edit Option */}
      <Box textAlign="center" mt={3}>
        <Avatar
          sx={{ width: 80, height: 80, margin: "auto" }}
          src="/path-to-avatar.jpg"
          alt="Edward Larry"
        />
        <Typography variant="h6" mt={1}>
          Edward Larry
        </Typography>
        <Typography color="textSecondary">Senior Designer</Typography>
      </Box>

      {/* Form */}
      <Box component="form" mt={3}>
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          defaultValue="edwardlarry@email.com"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          defaultValue="@EdLarry"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          helperText="Password should contain at least 8 characters."
          variant="outlined"
          margin="normal"
        />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <TextField label="Birth Date" defaultValue="14" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Month" defaultValue="September" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Year" defaultValue="1994" fullWidth />
          </Grid>
        </Grid>
        <Typography variant="caption" mt={2} display="block">
          Joined: 21 Jan 2020
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;
