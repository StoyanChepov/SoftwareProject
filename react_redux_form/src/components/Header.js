import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand">Software Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link to="/" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item active">
              <Link to="/notes" className="nav-link">Notes</Link>
            </li>
            <li className="nav-item">
              <Link to="/note/new" className="nav-link">Create new note</Link>
            </li>
            <li className="nav-item">
              <Link to="/project/new" className="nav-link">Create new project</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;