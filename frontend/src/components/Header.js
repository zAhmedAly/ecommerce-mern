import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      {/* <Container> */}
      <LinkContainer to="/">
        <Navbar.Brand>eCommerce App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/cart">
            <Nav.Link>
              <i className="fas fa-shopping-cart"></i> CART
            </Nav.Link>
          </LinkContainer>
          {!userInfo ? (
            <>
              <LinkContainer to="/login">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </>
          ) : (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Orders">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>{" "}
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Log Out{" "}
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
