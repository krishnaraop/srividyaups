import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const About = () => {
  return (
    <div className="container">
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">About Our School</CardTitle>
          <CardText>
            Located in serene atmosphere in the heart of Morapelly,Jagityal
            Mandal & District 505455
          </CardText>
        </CardBody>
      </Card>
      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">Principal</CardTitle>
          <CardText>It was Managed by Ramana Srujan Punugoti</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
