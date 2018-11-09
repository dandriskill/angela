import React from 'react';

const Bio = (props) => (
  <div>
    <h4>
      Bio
    </h4>
    <input
      type="text"
      value={props.bio}
      onChange={props.handleNewBio}
    />
  </div>
);

export default Bio;
