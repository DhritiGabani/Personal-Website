import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar>
      <Link className="nav-home-link" to="/">
        <Navbar.Brand> Dhriti Gabani </Navbar.Brand>
      </Link>
      <Nav className="ms-auto">
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
