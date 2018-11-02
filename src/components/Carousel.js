import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../assets/styles/Carousel.css';

const ArtworkCarousel = () => (
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
      <div>
        <img src="https://via.placeholder.com/400x200" alt="artwork-placeholder" />
        <p className="legend">Artpiece 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/400x200" alt="artwork-placeholder" />
        <p className="legend">Artpiece 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/400x200" alt="artwork-placeholder" />
        <p className="legend">Artpiece 3</p>
      </div>
    </Carousel>
  </div>
);

export default ArtworkCarousel;
