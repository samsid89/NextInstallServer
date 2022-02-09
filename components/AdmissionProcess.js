import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

class AdmissionProcess extends React.Component {
  render() {
    return (
      <>
        <section className="AdmissionProcess section" id="AdmissionProcess">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={8}>
                <h2
                  className="h2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  Admission process
                </h2>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  We make design learning simple right from the application.
                  Here is the step by step process to apply for Design Courses
                  at AND Academy.
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row className="Admission_numb_row">
              <Col md={2}>&nbsp;</Col>
              <Col className="white" md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="800"
                >
                  <h4 className="h4">01</h4>
                  <p className="p">
                    Submit
                    <br />
                    an online <br />
                    application
                  </p>
                </div>
              </Col>

              <Col className="yellow" md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1000"
                >
                  <h4 className="h4">02</h4>
                  <p className="p">
                    Schedule <br />
                    an Interview
                  </p>
                </div>
              </Col>
              <Col className="blue" md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1200"
                >
                  <h4 className="h4">03</h4>
                  <p className="p">
                    Receive an <br />
                    Offer Letter
                  </p>
                </div>
              </Col>
              <Col className="red" md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1400"
                >
                  <h4 className="h4">04</h4>
                  <p className="p">
                    Enroll in a <br />
                    programme <br />
                    & choose your <br />
                    payment plan
                  </p>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default AdmissionProcess;
