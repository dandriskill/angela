import React from 'react';

const CarouselOrder = (props) => (
  <div>
    <h4>
      Carousel Order
    </h4>
    <input onChange={props.handleNewCarouselOrder} />
  </div>
);

export default CarouselOrder;
