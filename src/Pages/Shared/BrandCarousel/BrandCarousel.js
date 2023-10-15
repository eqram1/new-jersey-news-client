import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import editorsInsight1 from '../../../assets/editorsInsight1.png'
import editorsInsight2 from '../../../assets/editorsInsight2.png'
import editorsInsight3 from '../../../assets/editorsInsight3.png'

const BrandCarousel = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={editorsInsight1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={editorsInsight2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={editorsInsight3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;