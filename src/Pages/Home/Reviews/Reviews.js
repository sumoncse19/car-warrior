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
import StarRatings from 'react-star-ratings';

const Reviews = () => {
    const [reviews, setReviews] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    },[])
    return (
        <Box style={{ marginBottom: '-60px' }}>
            <Container>
                <Card sx={{ px: 3, backgroundColor: 'gray', position: 'relative', zIndex: '1' }}>
                    <Typography variant='h6' sx={{ my: 3 }}>
                        OUR REVIEW SECTION
                    </Typography>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {
                            reviews.map(review =>
                                <SwiperSlide>
                                    <Card sx={{ maxWidth: 345, height: 330 }}>
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
                                                {review.review.slice(0, 90)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{ mr: 3 }}>Rating: {parseFloat(review.rating)}</Button>
                                            <StarRatings
                                                rating={parseFloat(review.rating)}
                                                starDimension="15px"
                                                starSpacing="0px"
                                                starRatedColor="blue"
                                            />
                                        </CardActions>
                                    </Card>
                                </SwiperSlide>
                            )
                        }
                        ...
                    </Swiper>
                </Card>
            </Container>
        </Box>
    );
};

export default Reviews;