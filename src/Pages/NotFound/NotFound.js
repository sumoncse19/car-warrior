import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const NotFound = () => {
    return (
        <Box>
            <img className='img-fluid w-100 container' src="https://media2.giphy.com/media/MSU9sITGoHWMGGVn9n/giphy.gif?cid=ecf05e4778ks9s5e7mvoduenk64xza8awp599qyrbqoy03l9&rid=giphy.gif&ct=g" alt="" />
            <Box align='center'>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <Button variant='contained' color='secondary' sx={{mb: 3}}>Go to HOME</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default NotFound;