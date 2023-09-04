import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Container, Typography } from "@mui/material";

const UpdateProduct = () => {
  const location = useLocation();
  const history = useHistory();

  const redirect_url =
    (location.state && location.state.from) || "/manageProduct";

  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://car-warrior-sumoncse19.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedTour = { ...product };
    updatedTour.name = updatedName;
    setProduct(updatedTour);
  };

  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedTour = { ...product };
    updatedTour.price = updatedPrice;
    setProduct(updatedTour);
  };

  const handleUpdateProduct = (e) => {
    const url = `https://car-warrior-sumoncse19.onrender.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Updated!!");
        history.push(redirect_url);
      });
    e.preventDefault();
  };

  return (
    <Container sx={{ my: 2 }}>
      <Typography variant="h5" color="#1b5e20" sx={{ fontWeight: 600 }}>
        The Product of: {product.name}
      </Typography>

      <form onSubmit={handleUpdateProduct}>
        <label className="my-2 mx-3">Name</label>
        <input
          type="text"
          onChange={handleNameChange}
          value={product.name || ""}
          placeholder="Name"
        />{" "}
        <br />
        <label className="my-2 mx-3">Price</label>
        <input
          type="number"
          onChange={handlePriceChange}
          value={product.price || ""}
          placeholder="$"
        />{" "}
        <br />
        <input className="btn btn-success mx-2" type="submit" value="Update" />
      </form>
    </Container>
  );
};

export default UpdateProduct;
