import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';

const ManageProduct = () => {

    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        fetch('https://car-warrior-sumoncse19.onrender.com/products')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete?');

        if (confirmation == true) {
            const url = `https://car-warrior-sumoncse19.onrender.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        window.location.reload();
                        const remaining = cars.filter(tour => tour._id !== id);
                        setCars(remaining);
                    }
                })
        }
    }

    return (
        <Container>
            <Typography variant='h4' color='secondary' sx={{ fontWeight: 'bold' }}>
                OUR AWESOME LUXURIES CAR
            </Typography>

            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                AT NOW WE HAVE <span style={{color: 'green'}}>{cars.length}</span> CAR
            </Typography>
            {
                cars.map(car =>
                    <Card key={car._id} sx={{ display: 'flex', my: 3, mx: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6" color='#e65100' sx={{fontWeight: 'bold'}}>
                                    {car.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {car.details.slice(0, 150)}...
                                </Typography>
                                <Typography variant='h5'>
                                    <span style={{color: 'blue', fontWeight: 'bold'}}>Price:</span> ${car.price}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', pl: 1, pb: 1, mx: 'auto' }}>
                                <Link style={{ textDecoration: 'none' }} to={`/manageProduct/update/${car._id}`}>
                                    <Button variant='contained'><UpdateIcon />Update</Button>
                                </Link>
                                
                                <Button onClick={() => handleDelete(car._id)} variant='contained' color='error' sx={{ ml: 2 }}><DeleteForeverIcon />Delete</Button>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={car.img}
                        />
                    </Card>
                )
            }
        </Container>
    );
};

export default ManageProduct;