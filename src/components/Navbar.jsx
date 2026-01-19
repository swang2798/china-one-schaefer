import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">China One</Link>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href={`${process.env.PUBLIC_URL}/menu.pdf`} target="_blank" rel="noopener noreferrer">Menu</a></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
