import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
          <Link to="/" className="navbar-brand">
            UserInformation
          </Link>
        
          <Link to="/" className="nav-link">
            <button type="button" className="btn btn-primary">Details</button>
          </Link>
          <Link to="/create" className="nav-link">
            <button type="button" className="btn btn-outline-success">Add New</button>
          </Link>
      </nav>
    );
  }
}
