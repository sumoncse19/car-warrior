import React from 'react';
import './Contact.css'
import MapDirection from './MapDirection';
import { Box, Container, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Container className='shadow-lg py-5 contact'>
                <Typography variant='h4' sx={{fontWeight: '600', mx: 'auto', mb: 2}} >CONTACT</Typography>
                <Box className='text-start ms-5 mt-2'>
                    <Typography variant='body1' mb={2}>
                        <strong><i className="fas fa-location-arrow"></i> Location: </strong>7-14, Nikunja Housing Society, South Khulshi, Chittagong.
                    </Typography>

                    <Typography variant='body1' mb={2}>
                        <strong><i className="fas fa-map-marked-alt"></i> Permanent Campus: </strong>Plot# S-1, CDA Kolpolok Residential Area, Bakalia, Chittagong.
                    </Typography>

                    <Typography variant='body1' mb={2}>
                        <strong><i className="fas fa-id-card"></i> Contact: </strong>88 031-2869877
                    </Typography>

                    <Typography variant='body1' mb={2}>
                        <strong><i className="fas fa-mobile-alt"></i> Mobile: </strong>01851120791, 01773225500, 01773225511
                    </Typography>

                    <Typography variant='body1' mb={2}>
                        <strong><i className="fas fa-fax"></i> FAX: </strong>+880312869966
                    </Typography>

                    <Typography variant='body1' mb={2}>
                        <strong><i className="far fa-paper-plane"></i> Email: </strong>admission@sumon.edu.bd
                    </Typography>
                </Box>
            </Container>

            <Container className='shadow my-5 py-5 get-in-touch'>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                    Get in Touch with US...
                </Typography>

                <Box>
                    <form className="row g-3 mt-3 px-3">
                        <Box className="col-md-4">
                            <label for="validationDefault01" className="form-label">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Md." required />
                        </Box>
                        <Box className="col-md-4">
                            <label for="validationDefault02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Sumon" required />
                        </Box>
                        <Box className="col-md-4">
                            <label for="validationDefaultUsername" className="form-label">Username</label>
                            <Box className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </Box>
                        </Box>
                        <Box className="col-md-6">
                            <label for="validationDefault03" className="form-label">City</label>
                            <input type="text" className="form-control" id="validationDefault03" required />
                        </Box>
                        <Box className="col-md-3">
                            <label for="validationDefault04" className="form-label">State</label>
                            <select className="form-select" id="validationDefault04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                            </select>
                        </Box>
                        <Box className="col-md-3">
                            <label for="validationDefault05" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="validationDefault05" required />
                        </Box>
                        <Box className="col-md-12">
                            <label for="validationDefault05" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="validationDefault06" placeholder='@gmail.com' required />
                        </Box>
                        <Box className="col-12">
                            <Box className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </Box>
                        </Box>
                        <Box className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Container>
    );
};

export default Contact;