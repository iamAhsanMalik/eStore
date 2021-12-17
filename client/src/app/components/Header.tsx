import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const navBarLinks = [
  { title: "home", path: "/" },
  { title: "cataloge", path: "cataloge" },
  { title: "about", path: "about" },
  { title: "contact", path: "contact" },
];
const navBarButtons = [
  { title: "login", path: "login" },
  { title: "register", path: "register" },
];

export const Header = () => {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        bg="light"
        expand="lg"
        variant="light"
        className="shadow-sm"
        sticky="top"
      >
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand>
              <strong>eStore</strong>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              {navBarLinks.map(({ title, path }) => (
                <Link to={path} key={path} className="nav-link">
                  <strong>{title.toUpperCase()}</strong>
                </Link>
              ))}
            </Nav>
            <Nav>
              <NavLink to="cart" className="nav-link m-auto">
                <span>
                  <i className="fas fa-shopping-cart fa-xl"></i>
                  <span className=" p-1 bg-danger badge rounded-pill translate-middle">
                    3
                  </span>
                </span>
              </NavLink>
              {navBarButtons.map(({ title, path }) => (
                <NavLink to={path} className="nav-link">
                  <Button className="btn-dark shadow">
                    {title.toUpperCase()}
                  </Button>
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
