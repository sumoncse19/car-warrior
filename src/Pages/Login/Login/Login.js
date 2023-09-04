import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/MB7QNp6/3094352.jpg"
            alt=""
          />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography
            variant="h6"
            color="green"
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              color="success"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              color="success"
              onChange={handleOnChange}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              color="success"
              type="submit"
            >
              <VpnKeyIcon />
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text" color="secondary">
                New User? Please Register
              </Button>
            </NavLink>
            {isLoading && <CircularProgress color="success" />}
            {user.email && (
              <Alert severity="success">Login Successfully!!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------------</p>
          <Button
            sx={{ mb: 2 }}
            variant="contained"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon sx={{ color: "orange" }} />
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
