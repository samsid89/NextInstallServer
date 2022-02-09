import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Consumer } from "./Context";

const NotSure = (props) => {
  return (
    <>
      <section className="NotSure">
        <Container fluid>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col md={8}>
              <h2
                className="h2"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1500"
              >
                Not sure about which programme to pick ?
              </h2>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1600"
              >
                <Consumer>
                  {({ data, handlecheck }) => (
                    <a
                      className="a consult"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handlecheck(true);
                      }}
                    >
                      CONSULT CAREER ADVISORS{" "}
                      <img
                        className="img"
                        src="/images/tick_icon_yellow.svg"
                        alt="icon"
                      />
                    </a>
                  )}
                </Consumer>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NotSure;
