import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineMailLock } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Divyansh Yadav</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Divyansh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> <MdOutlineMailLock/> divyanshyadav2108@gmail.com</h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;