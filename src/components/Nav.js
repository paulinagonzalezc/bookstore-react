import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-container">
      <h1 className="header">Bookstore CMS</h1>
      <div className="nav-links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </div>
    </nav>
  );
}

export default Nav;
