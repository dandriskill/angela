import React from 'react';

import Carousel from './Carousel';

import '../assets/styles/Content.css';

const DummyImages = [
  {
    url: "https://via.placeholder.com/400x200",
    alt: "artwork-placeholder",
    name: "Artpiece 1",
  },
  {
    url: "https://via.placeholder.com/400x200",
    alt: "artwork-placeholder",
    name: "Artpiece 2",
  },
  {
    url: "https://via.placeholder.com/400x200",
    alt: "artwork-placeholder",
    name: "Artpiece 3",
  },
];

const Content = () => (
  <div className="content-container">
    <Carousel images={DummyImages} />
  </div>
);

export default Content;
