import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <LinkContainer to="/">
        <Navbar.Brand>eCommerce App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>{" "}
          <NavDropdown title="User Account" id="basic-nav-dropdown">
            <LinkContainer to="/profile">
              <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/Orders">
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>{" "}
            <NavDropdown.Divider />
            <NavDropdown.Item to="/logoff">Log Out </NavDropdown.Item>
          </NavDropdown>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
