import React from 'react';

const UploadImage = (props) => (
  <div>
    <h4>
      Upload Image
    </h4>
    <input
      type="text"
      value={props.image}
      onChange={props.handleUploadImage}
    />
  </div>
);

export default UploadImage;
