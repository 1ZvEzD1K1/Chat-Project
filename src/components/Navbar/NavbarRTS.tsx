import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const NavbarRTS: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Chat Project</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/">Enter</NavLink>
        <NavLink to="/reg">Register</NavLink>
      </Nav>
    </Navbar>
  );
};
