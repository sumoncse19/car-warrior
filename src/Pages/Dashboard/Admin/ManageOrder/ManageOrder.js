import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  TableContainer,
  Paper,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@mui/system";

const ManageOrders = () => {
  const location = useLocation();
  const history = useHistory();

  const redirect_url =
    (location.state && location.state.from) || "/manageOrders";

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://car-warrior-sumoncse19.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to delete?");

    if (confirmation == true) {
      const url = `https://car-warrior-sumoncse19.onrender.com/orders/${id}`;
      fetch(
        url,
        {
          method: "DELETE",
        },
        []
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            history.push(redirect_url);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <Container sx={{ mb: 3 }}>
      <Typography variant="h4" color="success.main" sx={{ fontWeight: 600 }}>
        All Orders: {orders.length}
      </Typography>

      <TableContainer component={Paper}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          {orders.length !== 0 ? (
            orders.map((pd, index) => (
              <tbody key={pd._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{pd.productName}</td>
                  <td>{pd.email}</td>
                  <td>{pd.customerName}</td>
                  <td>{pd.address}</td>

                  <td>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`allOrder/updateStatus/${pd._id}`}
                    >
                      <Button variant="contained">
                        {pd.status || "Pending"}
                      </Button>
                    </Link>

                    <Button
                      onClick={() => handleDelete(pd._id)}
                      underline="none"
                      variant="contained"
                      color="error"
                      sx={{ mt: 1, ml: 1 }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td colSpan="">No orders available.</td>
              </tr>
            </tbody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageOrders;
