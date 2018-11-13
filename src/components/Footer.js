import React from 'react';

import '../assets/styles/Footer.css';

const Footer = (props) => (
  <div className="footer-container">
    <p>&copy; {(new Date()).getFullYear()} {props.name}.</p>
    <p>All rights reserved.</p>
  </div>
);

export default Footer;
