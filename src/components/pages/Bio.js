import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  bio: string.isRequired,
};

const Bio = (props) => (
  <div>
    <h1>Bio</h1>
    <p>
      {props.bio}
    </p>
  </div>
);

Bio.propTypes = propTypes;

export default Bio;
