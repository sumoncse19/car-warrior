import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const Products = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productsLimit')
            .then(res => res.json())
            .then(data => setCars(data));
    },[])

    return (
        <Box sx={{ flexGrow: 1, display: 'block', mx: 'auto' }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" color='secondary' component="div">
                    OUR AWESOME CAR
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ overflow: 'auto' }}>
                    {
                        cars.map(car => 
                            <Grid key={car._id} item xs={4} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345, height: '100%', backgroundColor: '#e0e0e0', mx: 'auto' }}>
                                    <CardMedia
                                        component='img'
                                        height="140"
                                        image={car.img}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#311b92', fontWeight: 'bold' }}>
                                            {car.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {car.details.split('').slice(0, 60).toString().replace(/,/g, '')}...
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: '#880e4f', fontWeight: 'medium' }}>
                                            Price: $ {car.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ mb: 2, ms: 2 }}>
                                        <Link style={{ textDecoration: 'none' }} to={`/allcar/${car._id}`}>
                                            <Button variant="contained" size="small" color='success'
                                            ><ShoppingCartIcon />Purchase Now</Button>
                                        </Link>
                                        <Button size="small" sx={{ color: '#ff5722', fontWeight: 500 }}><ReadMoreIcon />Read More...</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;