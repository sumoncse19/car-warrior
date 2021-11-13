import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Container, Typography } from '@mui/material';

const UpdateOrderStatus = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/manageOrders';

    const { id } = useParams();

    const [product, setProduct] = useState({ status: 'Accept' });

    useEffect(() => {
        fetch(`https://car-warrior-sumon6638.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleActionChange = e => {
        const updatedAction = e.target.value;
        const updatedOrder = { ...product }
        updatedOrder.status = updatedAction;
        setProduct(updatedOrder);
    }

    const handleUpdate = e => {
        fetch(`https://car-warrior-sumon6638.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                alert('Accepted!!');
                history.push(redirect_url);
                console.log(data);
            });
        e.preventDefault()
    }

    return (
        <Container sx={{ my:5 }}>
            <Typography variant='h5' color='primary.main' sx={{fontWeight: 600}}>
                Do you want to Approve it?
            </Typography>
            <form onSubmit={handleUpdate}>
                <label className='my-2'>Please write order status</label><br />

                <input type="text" onChange={handleActionChange} placeholder='Approved / Shipping / Deliverd / On Process' />

                <input className='btn btn-success mx-2' type="submit" value="Update" />
            </form>
        </Container>
    );
};

export default UpdateOrderStatus;