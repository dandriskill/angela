import React from 'react';
import { array } from 'prop-types';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../assets/styles/Carousel.css';

const propTypes = {
  images: array.isRequired,
};

const FeaturedCarousel = (props) => (
  <div className="carousel-container">
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      useKeyboardArrows={true}
      emulateTouch={true}
      swipeable={true}
    >
      {props.images.map((image) => (
        <div key={image.url}>
          <img src={image.url} alt={image.alt} />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

FeaturedCarousel.propTypes = propTypes;

export default FeaturedCarousel;
