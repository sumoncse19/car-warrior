import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{marginTop: '-50px'}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.luxe.digital/media/2021/04/10100621/best-luxury-car-brand-bugatti-luxe-digital%402x.jpg" className="d-block w-100" alt="..." style={{ height: '800px' }}/>
                    <div className="carousel-caption d-none d-md-block mb-2 rounded" style={{ backgroundColor: '#2A292A' }}>
                        <h4 className='text-warning px-2'>
                            A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods.
                        </h4>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://s7g10.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain" className="d-block w-100" alt="..." style={{ height: '800px' }}/>
                    <div className="carousel-caption d-none d-md-block mb-2 rounded" style={{ backgroundColor:'#2A292A'}}>
                        <h4 className='text-warning px-2'>
                            Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex.
                        </h4>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_1280.jpg" className="d-block w-100" alt="..." style={{height: '800px'}}/>

                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;