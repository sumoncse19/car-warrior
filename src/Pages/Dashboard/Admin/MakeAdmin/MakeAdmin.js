import React, { useState } from "react";
import { Alert, Button, TextField, Box, Typography } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";

const MakeAdmin = () => {
  const location = useLocation();
  const history = useHistory();

  const redirect_url = (location.state && location.state.from) || "/makeAdmin";

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://car-warrior-sumoncse19.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
          history.push(redirect_url);
        }
      });
    e.preventDefault();
  };
  return (
    <Box style={{ height: "50vh" }}>
      <Typography variant="h5" color="success.main" sx={{ fontWeight: 700 }}>
        <AdminPanelSettingsIcon />
        Make an Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        {success && (
          <Alert severity="success" sx={{ width: "25%", mx: "auto" }}>
            Maid Admin Successfully!!
          </Alert>
        )}
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          color="success"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          <AdminPanelSettingsIcon /> Make Admin
        </Button>
      </form>
      {success && (
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="contained" color="success" sx={{ mt: 5 }}>
            <HomeIcon />
            Go To HOME
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default MakeAdmin;
