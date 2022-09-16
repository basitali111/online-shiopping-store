import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div>
    <Link style={{ textDecoration: 'none' }} className="Header" to="/">
      <div className="Header-container">
        <div>
          <p to="/" className="back"> Back </p>
        </div>
        <div>
          <h1 className="logoname">Celestial Store</h1>
        </div>
      </div>
    </Link>
  </div>
);

export default Header;
