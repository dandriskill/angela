import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/" className="logo">
      {props.name}
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
      {props.authed &&
        <button
          onClick={() => {props.logout()}}
        >
          Logout
        </button>
      }
    </nav>
  </div>
);

export default Nav;
