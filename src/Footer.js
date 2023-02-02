import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Iframe from "react-iframe";

const Footer = () => {
  return (
    <Container fluid className="footerMain">
      <Row>
        <Col>school logo</Col>
        <Col>school Address</Col>
        <Col>Other Links</Col>
        <Col>
          {/* <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.4085064480145!2d78.85789872709387!3d18.826287168465253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd1353feb0504b%3A0x3b783aedb14fb1fa!2sSri%20Vidya%20upper%20primary%20school!5e0!3m2!1sen!2sin!4v1675334127625!5m2!1sen!2sin"
            width="400px"
            height="400px"
            id=""
            className=""
            display="block"
            loading="lazy"
            position="relative"
            referrerpolicy="no-referrer-when-downgrade"
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
