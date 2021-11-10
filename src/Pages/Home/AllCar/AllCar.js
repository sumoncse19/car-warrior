import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const AllCar = (props) => {
    // const { name, price, details, img } = props.car
    // const url = `${img}`
    return (
        <div>
            
        
        {/* <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: '100%', backgroundColor: '#e0e0e0' }}>
                <CardMedia
                    component='img'
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#311b92', fontWeight: 'bold'}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details.split('').slice(0, 60).toString().replace(/,/g, '')}
                    </Typography>
                    <Typography variant='h6' sx={{ color: '#880e4f', fontWeight: 'medium'}}>
                        Price: $ {price}
                    </Typography>
                </CardContent>
                <CardActions sx={{mb: 2}}>
                    <Button variant="contained" size="small" color='success'>Purchase Now</Button>
                    <Button size="small" sx={{ color: '#ff5722', fontWeight: 500}}>Learn More...</Button>
                </CardActions>
            </Card>
        </Grid> */}
        </div>
    );
};

export default AllCar;