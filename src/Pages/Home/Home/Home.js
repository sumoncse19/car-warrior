import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Blog_Contact from '../Blog_Contact/Blog_Contact';

const Home = () => {
    return (
        <div style={{marginTop: '-50px'}}>
            <Banner></Banner> 
            <Products></Products>
            <Blog_Contact></Blog_Contact>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;