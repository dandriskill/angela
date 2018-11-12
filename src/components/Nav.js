import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Nav.css';

const Nav = () => (
  <div className="nav">
    <Link to="/" className="logo">
      Angela Heirtzler
    </Link>
    <nav className="nav">
      <Link to="/bio" className="nav-link">
        Bio
      </Link>
      <Link to="/gallery" className="nav-link">
        Gallery
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  </div>
);

export default Nav;
