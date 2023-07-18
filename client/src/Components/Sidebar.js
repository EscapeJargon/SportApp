import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Sport App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/leagues"}>
                Leagues
              </Nav.Link>
              <Nav.Link as={Link} to={"/schedule"}>
                Schedule
              </Nav.Link>
              <Nav.Link as={Link} to={"/playerinfo"}>
                Player Info
              </Nav.Link>
              <Nav.Link as={Link} to={"/topperf"}>
                Top Performance
              </Nav.Link>
              <Nav.Link as={Link} to={"/lineup"}>
                Line Up
              </Nav.Link>
              <Nav.Link as={Link} to={"/standings"}>
                Standings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar;
