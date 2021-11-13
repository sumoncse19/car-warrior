import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const AllCar = () => {
    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        fetch('https://car-warrior-sumon6638.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, display: 'block' }}>
            <Container>
                <Typography sx={{ fontWeight: 800, color: 'success.main' }} variant="h6" component="div" style={{textDecoration: 'underline'}}>
                    WELCOME TO OUR SHOWROOM
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }} variant="h4" component="div">
                    OUR AWESOME CAR
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ overflow: 'auto', mb: 3 }}>
                    {
                        cars.map(car =>
                            <Grid key={car._id} item xs={4} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345, height: '100%', backgroundColor: '#e0e0e0', mx:'auto' }}>
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
                                        <Link style={{textDecoration: 'none'}} to={`/allcar/${car._id}`}>
                                            <Button variant="contained" size="small" color='success'><ShoppingCartIcon /> Purchase Now</Button>
                                        </Link>
                                        <Button size="small" sx={{ color: '#ff5722', fontWeight: 500 }}><ReadMoreIcon />Learn More...</Button>
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

export default AllCar;