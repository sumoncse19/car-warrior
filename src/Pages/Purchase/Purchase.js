import * as React from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {

    const { purchase } = useParams();

    const [cars, setCars] = React.useState([]);

    const { user } = useAuth();

    const initialInfo = { customerName: user.displayName, productName: cars.name, email: user.email, phone: '' };

    const [purchaseInfo, setPurchaseInfo] = React.useState(initialInfo);

    React.useEffect(() => {
        fetch(`http://localhost:5000/products/${purchase}`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {

        const purchase = {
            ...purchaseInfo,
            status: 'Pending'
        }

        fetch('http://localhost:5000/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.inserteId) {
                
                }
                alert('Purchase Successfully!!');
            })
        e.preventDefault();
    }
    
    return (
        <Container>
            <Card sx={{my: 2, py: 2}}>
                <CardMedia
                    component="img"
                    image={cars.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cars.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cars.details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to='/allcar'>
                        <Button variant='contained' color='primary' size="small">Show All Cars</Button>
                    </Link>
                </CardActions>
            </Card>

            <Card sx={{my: 2, py: 2, width: '60%', mx: 'auto'}}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    You are purchase for: {cars.name}
                </Typography>
                <form onSubmit={handlePurchaseSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label='For Surety type here your purchase car name properly'
                        id="outlined-size-small"
                        name='productName'
                        onBlur={handleOnBlur}
                        defaultValue = {cars.name}
                        size="small"
                        required
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Name"
                        id="outlined-size-small"
                        name='customerName'
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Email"
                        id="outlined-size-small"
                        name='email'
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Address"
                        id="outlined-size-small"
                        name='address'
                        onBlur={handleOnBlur}
                        size="small"
                    />

                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Phone Number"
                        id="outlined-size-small"
                        name='phone'
                        onBlur={handleOnBlur}
                        defaultValue="01"
                        size="small"
                    /> <br />
                    <Button type='submit' variant='contained'>Submit</Button>
                </form>
            </Card>
        </Container>
    );
};

export default Purchase;