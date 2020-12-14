import React from "react";

import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>eCommerce App</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Sign In</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <NavDropdown title="User Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log Out </NavDropdown.Item>
          </NavDropdown>{" "}
        </Nav>
      </Navbar>

      <main className="py-3">
        <Container>
          <Row>
            <Col>
              <h2> eCommerce App </h2>;
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
