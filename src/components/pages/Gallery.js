import React from 'react';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';

const propTypes = {
  images: arrayOf(shape({
    url: string.isRequired,
    alt: string.isRequired,
    name: string.isRequired,
  })).isRequired,
};

const Gallery = (props) => (
  <div>
    <h1>Gallery</h1>
    {props.images.map((image) => (
      <div key={image.url}>
        <img src={image.url} alt={image.alt} />
        <p className="legend">{image.name}</p>
      </div>
    ))}
  </div>
);

Gallery.propTypes = propTypes;

export default Gallery;
