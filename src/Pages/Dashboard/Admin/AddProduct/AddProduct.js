import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { Container } from 'react-bootstrap';
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './AddProduct.css'

const AddProduct = () => {

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/manageProduct';

    const { register, handleSubmit, reset } = useForm();

    const [cars, setCars] = React.useState([]);

    const onSubmit = data => {
        fetch('https://car-warrior-sumon6638.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully!!');
                    reset();
                    history.push(redirect_url);
                }
            })
    };

    React.useEffect(() => {
        fetch('https://car-warrior-sumon6638.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete?');

        if (confirmation == true) {
            const url = `https://car-warrior-sumon6638.herokuapp.com/products/${id}`;
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
        <Container className="container add-product">
            <Box className="card mb-5 py-5 shadow">
                <Typography variant='h4' color='success.main' sx={{fontWeight: 'bold'}}>
                    Add a new car
                </Typography>
                <hr className='w-25 mx-auto mb-5' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='CAR NAME' /> <br />

                    <textarea {...register("details")} placeholder="Details" /> <br />

                    <input type="number" {...register("price")} placeholder="Price" /> <br />

                    <input type="text" {...register("img")} placeholder="Image URL" /> <br />

                    <Button variant='contained' color='secondary' type="submit">Submit<SendIcon /></Button> <br />
                </form>
            </Box>
            
            <Box>
                <Typography variant='h4' color='secondary' sx={{fontWeight: 'bold'}}>
                    OUR AWESOME LUXURIES CAR
                </Typography>

                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    AT NOW WE HAVE <span style={{color: 'blueviolet'}}>{cars.length}</span> CAR
                </Typography>
                {
                    cars.map(car =>
                        <Card key={car._id} className='shadow' sx={{ display: 'flex', my: 3, mx: 2, border: '2px solid gray' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography sx={{fontWeight: 600}} component="div" variant="h5" color='success.main'>
                                        {car.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {car.details.slice(0, 150)}...
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', pl: 1, pb: 1, mx: 'auto' }}>
                                    <Button onClick={() => handleDelete(car._id)} variant='contained' color='error'
                                    ><DeleteForeverIcon />Delete</Button>
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
            </Box>

        </Container>
    );
};

export default AddProduct;