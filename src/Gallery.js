import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from "./assets/IMG20220815093104.jpg";
import img2 from "./assets/IMG20220815093929.jpg";
import img3 from "./assets/IMG20220815094334.jpg";
import img4 from "./assets/IMG20220815093428.jpg";
import img5 from "./assets/IMG20220815093658.jpg";
import img6 from "./assets/IMG20220815094017.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <Container>
        <h4>Gallery</h4>
        <Row>
          <Col>
            {" "}
            <img src={img1} alt="school_image" className="imageGallery" />{" "}
          </Col>
          <Col>
            {" "}
            <img src={img2} alt="school_image" className="imageGallery" />
          </Col>
          <Col>
            {" "}
            <img src={img3} alt="school_image" className="imageGallery" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {" "}
            <img src={img4} alt="school_image" className="imageGallery" />
          </Col>
          <Col>
            {" "}
            <img src={img5} alt="school_image" className="imageGallery" />
          </Col>
          <Col>
            {" "}
            <img src={img6} alt="school_image" className="imageGallery" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
