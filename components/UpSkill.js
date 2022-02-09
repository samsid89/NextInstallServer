import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

class UpSkill extends React.Component {
  render() {
    return (
      <>
        <section className="upskill section">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={8} data-aos="fade-up" data-aos-duration="1500">
                <h3 className="h3">
                  Upskill with our design courses, and advance your career with
                  a unique blend of cohort-based learning, live lectures and
                  industry mentorship.
                </h3>
              </Col>
              <Col md={2} data-aos="fade-up" data-aos-duration="1500">
                &nbsp;
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UpSkill;
