import React from 'react';
import Slider from 'react-slick';
import './ProjectCarousel.css';

const ProjectCarousel: React.FC<{ images: string[] }> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Project slide ${index + 1}`} className="carousel-image" />
                        <div className="slide-number">{index + 1} / {images.length}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel;
