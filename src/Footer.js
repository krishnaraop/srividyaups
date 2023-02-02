import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <Container fluid className="footerMain">
      <Row>
        <Col>school logo</Col>
        <Col>school Address</Col>
        <Col>Other Links</Col>
      </Row>
    </Container>
  );
};

export default Footer;
