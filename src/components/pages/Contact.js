import React from 'react';
import { shape, string } from 'prop-types';

const propTypes = {
  contactInfo: shape({
    name: string.isRequired,
    email: string.isRequired,
  }),
};

const Contact = (props) => (
  <div>
    <h1>Contact</h1>
    <h3>{props.contactInfo.name}</h3>
    <h3>{props.contactInfo.email}</h3>
  </div>
);

Contact.propTypes = propTypes;

export default Contact;
