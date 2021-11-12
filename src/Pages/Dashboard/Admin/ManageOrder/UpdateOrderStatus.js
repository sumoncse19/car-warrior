import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const UpdateOrderStatus = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/manageOrders';

    const { id } = useParams();

    const [product, setProduct] = useState({ status: 'Accept' });

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
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
        fetch(`http://localhost:5000/orders/${id}`, {
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
        <div className='container text-center my-5'>
            <h2>Do you want to Approve it?</h2>
            <form onSubmit={handleUpdate}>
                <label className='my-2'>Please write order status</label><br />

                <input type="text" onChange={handleActionChange} placeholder='Approved / Shipped' />

                <input className='btn btn-success mx-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrderStatus;