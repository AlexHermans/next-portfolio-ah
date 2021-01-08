import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Head from "next/head";
import Link from "next/link";

const Header = () => (
  <Container
    style={{ backgroundColor: "#7E4FFB", borderBottom: "3px solid black" }}
    fluid
    className="fixed-top"
  >
    <Container className="p-2">
      <Row className="align-items-center">
        <Col xs="auto">
          {/* <img alt="logo ex-libris" width="65" src={logo}></img> */}
        </Col>
        <Col className="p-0">
          <Navbar className="justify-content-end" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-controls" />
            <Navbar.Collapse
              as="ul"
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav as="ul">
                <Nav.Item as="li" className="pr-sm-3">
                  <Link style={{ color: "white" }} href="/work">
                    Work
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="pr-sm-3">
                  <Link style={{ color: "white" }} href="/story">
                    Story
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="pr-sm-3">
                  <Link style={{ color: "white" }} href="/contact">
                    Contact
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Header;
