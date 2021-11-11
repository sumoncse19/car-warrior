import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';

const Footer = () => {

    const footerBg = blueGrey[800]

    return (
        <Box sx={{ backgroundColor: footerBg, color:'white', pt: 5}} style={{marginTop: '-60px'}}>
            <Container>
                <Grid container spacing={2} sx={{py: 7 }}>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6'  sx={{ textAlign: 'left' }}>
                            Useful Links
                            <li>About us</li>
                            <li>Our community</li>
                            <li>Local events</li>
                            <li>Privacy policy</li>
                            <li>Service plus</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ textAlign: 'left' }}>
                            Our Shop
                            <li>Cars & parts</li>
                            <li>Clothing</li>
                            <li>Cars for rent</li>
                            <li>Booking form</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ textAlign: 'left' }}>
                            Sitemap
                            <li>Home</li>
                            <li>Features</li>
                            <li>Shop</li>
                            <li>News</li>
                            <li>Contacts</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ textAlign: 'left', color: 'yellow'}}>
                            Subscribe
                            <TextField
                                required
                                id="outlined-required"
                                label="Your email address"
                                name='email'
                                type='email'
                            />
                            <br />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the Privacy Policy" />
                        </Typography>
                        <Button variant="contained" color="success" type='submit'>Submit</Button>
                    </Grid>
                </Grid>
                <Typography variant='p'>
                    © All Right Reserved Update Tech 2021
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;