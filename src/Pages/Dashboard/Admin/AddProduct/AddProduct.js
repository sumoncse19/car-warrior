import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from '@mui/material';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/products', {
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
                }
            })
    };

    return (
        <Box className="container add-product">
            <Box className="card my-5 py-5 shadow">
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                    Add a new car
                </Typography>
                <hr className='w-25 mx-auto mb-5' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='CAR NAME' /> <br />

                    <textarea {...register("details")} placeholder="Details" /> <br />

                    <input type="number" {...register("price")} placeholder="Price" /> <br />

                    <input type="text" {...register("img")} placeholder="Image URL" /> <br />

                    <Button variant='contained' type="submit">Submit</Button> <br />
                </form>
            </Box>
        </Box>
    );
};

export default AddProduct;