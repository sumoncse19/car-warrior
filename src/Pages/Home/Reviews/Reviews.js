import * as React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const Reviews = () => {
    const [reviews, setReviews] = React.useState([])

    React.useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    },[])
    return (
        <Container>
            <Box>
                <Card sx={{ px: 3, backgroundColor: 'gray', position: 'relative', zIndex: '1'}}>
                    <Typography variant='h6' sx={{my: 3}}>
                        OUR REVIEW SECTION
                    </Typography>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            reviews.map(review =>
                                <SwiperSlide>
                                    <Card sx={{ maxWidth: 345, height: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={review.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {review.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {review.review.slice(0, 110)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </SwiperSlide>
                            )
                        }
                        ...
                    </Swiper>
                </Card>
            </Box>
        </Container>
    );
};

export default Reviews;