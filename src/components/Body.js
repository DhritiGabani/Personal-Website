import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Body(props) {
  return (
    <div className="jumbotron">
      <Container>
        <Row>
          <Col>
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h3>{props.subTitle}</h3>}
            {props.text && <h4>{props.text}</h4>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
