import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Paper,
  CardActions,
  Avatar,
  CardHeader,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Blog_Contact = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://car-warrior-sumoncse19.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Box sx={{ my: 5, pb: 5 }}>
      <Typography variant="h4" color="#33691e" sx={{ fontWeight: "bold" }}>
        OUR BLOG & CONTACT
      </Typography>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            sx={{ my: 5 }}
            style={{ textAlign: "left" }}
            xs={12}
            md={6}
          >
            <Paper
              style={{
                maxHeight: 570,
                overflow: "auto",
                backgroundColor: "#424242",
                paddingTop: "10px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: "bold" }}
                color="#ff6f00"
              >
                OUR BLOG
              </Typography>
              {blogs.map((blog) => (
                <Card key={blog._id} sx={{ display: "flex", my: 3, mx: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="body1">
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {blog.details.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={blog.img}
                  />
                </Card>
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} sx={{ ml: 12, my: 5, mx: "auto" }}>
            <Card sx={{ maxWidth: 350, mx: "auto" }}>
              <CardHeader
                avatar={
                  <img
                    src="https://i.ibb.co/X57DqxQ/logo.jpg"
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="CAR WARRIOR"
                subheader="Since 2000"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.ytimg.com/vi/fgZbQlZLCCk/maxresdefault.jpg"
                alt="Paella dish"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 1 }}
                >
                  <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
                  Chittagong, Bangladesh
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 1 }}
                >
                  <span style={{ fontWeight: "bold" }}>Phone:</span> +123 456
                  789
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ my: 1 }}
                >
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  carwarrior@gmail.com
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog_Contact;
