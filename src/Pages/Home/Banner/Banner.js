import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box } from '@material-ui/core';

const Banner = () => {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];


    return (
        <h2>This is Banner</h2>
    );
};

export default Banner;


/* 
<Carousel>
                {items.map((item) => (
                    <Paper>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Button>more info...</Button>
                    </Paper>
                ))}
            </Carousel>
*/