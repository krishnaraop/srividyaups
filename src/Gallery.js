import React from "react";
import { Container, Row, Col } from "reactstrap";
const Gallery = () => {
  return (
    <div className="container">
      <Container>
        <h4>Gallery</h4>
        <Row>
          <Col>a</Col>
          <Col>b</Col>
          <Col>c</Col>
        </Row>
        <Row>
          <Col>a</Col>
          <Col>b</Col>
          <Col>c</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
