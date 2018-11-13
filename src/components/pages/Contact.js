import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  name: string.isRequired,
  email: string.isRequired,
};

const Contact = (props) => (
  <div>
    <h1>Contact</h1>
    <h3>{props.name}</h3>
    <h3>{props.email}</h3>
  </div>
);

Contact.propTypes = propTypes;

export default Contact;
