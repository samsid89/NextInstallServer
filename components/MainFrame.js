import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class MainFrame extends React.Component {
  render() {
    return (
      <Container fluid className="mainframe">
        <Row>
          <Col md={2}></Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default MainFrame;
