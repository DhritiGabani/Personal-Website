import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar className="nav-bar">
        <Link className="nav-home-link" to="/">
          <Navbar.Brand style={{ color: "#B1C8FF", "font-weight": "600" }}>
            Dhriti Gabani
          </Navbar.Brand>
        </Link>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/projects">
            <span className="pages">Projects</span>
          </Link>
          <Link className="nav-link" to="/about">
            <span className="pages">About</span>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
