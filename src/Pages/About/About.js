import React from 'react';
import { Box, Container, Typography, CardMedia, CardContent, Card, Grid, CardActionArea, Button } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Box>
            <Container sx={{ mt: 4 }}>
                <Card sx={{ display: 'flex' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%' }}
                                image="https://www.drivetime.com/assets/img/homepage-genius-miata-car.png"
                                alt="Live from space album cover"
                            />
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant='h5' sx={{ fontWeight: '600' }}>Welcome to the genius way to buy your next car</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    DriveTime has financed over 4 million people across the country. Our exclusive In-House financing model allows us to provide flexible options for all.

                                    These nearly limitless financing options allow you to shop our massive 11,448 vehicle inventory for the exact used car, truck, van or SUV that best fits your needs. Car selection and customer satisfaction are of the utmost importance to us.
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Container>

            <Container sx={{mt: 3}}>
                <Typography align='center' variant='h5' sx={{fontWeight: '600'}}>A Sample Video of Our Collection!!</Typography>
                <iframe className='w-75' height="315" src="https://www.youtube.com/embed/iaxH6R7cnUs?start=64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>

            <Container sx={{ mt: 4 }}>
                <Card sx={{ display: 'flex' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant='h5' sx={{ fontWeight: '600' }}>Get a real down payment without ever leaving your home</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Our industry-leading online auto loan application puts you in the driver's seat with the information you need to make a decision on your next used car purchase. Each online auto loan approval is 100% personalized to you and your credit including required down payment and an enhanced car shopping experience.

                                    Other dealerships and financial institutions cannot compete with the financing information you can get in two minutes or less on DriveTime.com.
                                </Typography>
                            </CardContent>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%' }}
                                image="https://www.drivetime.com/assets/img/homepage-phone-float.png"
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Container>

            <Container sx={{ my: 4 }}>
                <Typography variant='h5' sx={{ fontWeight: '600' }}>We are the car-buying and financing revolution</Typography>
                <Grid container spacing={2} align='center' mt={3}>
                    <Grid item xs={12} md={6} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://www.drivetime.com/assets/img/blue-car-circle.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Owning a used car has its benefits when you purchase with us
                                    </Typography>
                                    <Typography variant="body2" color="text.success" align='left' sx={{color: 'success.main'}}>
                                        <DoubleArrowIcon /> 5-Day Return Gurantee <br />
                                        <DoubleArrowIcon /> 30-Day/1500 Mile Limited Warranty <br />
                                        <DoubleArrowIcon /> Free AutoCheck History Report <br />
                                        <DoubleArrowIcon /> No-Haggle Pricing
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://www.drivetime.com/assets/img/dealership-circle.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        We guarantee you a dealership experience like no other
                                    </Typography>
                                    <Typography variant="body2" color="text.success" align='left' sx={{ color: 'success.main' }}>
                                        <DoubleArrowIcon /> 99.9% Approval Odds <br />
                                        <DoubleArrowIcon /> No-Pressure Sales Advisors <br />
                                        <DoubleArrowIcon /> Personalized Financing Options <br />
                                        <DoubleArrowIcon /> 131 Dealerships Across the Country
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Link to='/allcar' style={{textDecoration:'none'}}>
                    <Button variant='contained' color='success' sx={{ mt: 2 }}>Shop Our Car</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default About;