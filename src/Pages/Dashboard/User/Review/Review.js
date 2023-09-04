import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Review = () => {
  const location = useLocation();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch("https://car-warrior-sumoncse19.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thank you for give us a review!!");
          reset();
          history.push("/");
        }
      });
  };
  return (
    <Box className="container add-product">
      <Box className="card my-5 py-5 shadow">
        <Typography
          variant="h4"
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          GIVE US A REVIEW
        </Typography>
        <hr className="w-25 mx-auto mb-5" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            hidden
            {...register("name", { required: true, maxLength: 20 })}
            placeholder={user.displayName}
            defaultValue={user.displayName}
          />{" "}
          <br />
          <textarea {...register("review")} placeholder="Details" /> <br />
          <input
            type="text"
            {...register("rating")}
            placeholder="Rating out of 5"
          />{" "}
          <br />
          <input
            hidden
            type="text"
            {...register("img")}
            placeholder={user.photoURL}
            defaultValue={user.photoURL}
          />{" "}
          <br />
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>{" "}
          <br />
        </form>
      </Box>
    </Box>
  );
};

export default Review;
