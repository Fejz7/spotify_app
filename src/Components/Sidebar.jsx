// Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <NavLink to="/" className="navbar-brand">
            <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/your-library" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </NavLink>
            </li>
            {/* Aggiungi nuovi bottoni per le sezioni musicali */}
            <li>
              <NavLink to="/rock" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-music-note"></i>&nbsp; Rock
              </NavLink>
            </li>
            <li>
              <NavLink to="/pop" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-music-note"></i>&nbsp; Pop
              </NavLink>
            </li>
            <li>
              <NavLink to="/hiphop" className="nav-item nav-link d-flex align-items-center">
                <i className="bi bi-music-note"></i>&nbsp; Hip Hop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <NavLink to="/cookie-policy">Cookie Policy</NavLink> | <NavLink to="/privacy">Privacy</NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;


