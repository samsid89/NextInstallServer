import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="about section" id="about-us">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={6}>
                <h1
                  className="h1"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  About
                </h1>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  AND Academy is the brainchild of the founder of the Indian
                  Institute of Art and Design (IIAD), a leading design school in
                  India established in collaboration with Kingston School of
                  Art, London.  <br className="br" />
                  <br className="br" />
                  With nearly a decade of experience in higher education, the
                  team at AND Academy brings its expertise to online design
                  education by offering in-demand programmes with an advanced
                  curriculum. Our purpose is to transform access to design
                  education by making it accessible, affordable, and
                  industry-relevant.{" "}
                </p>
              </Col>
              <Col md={2}>
                <div className="div about_hlf_lef">
                  <div
                    style={{ borderTop: "1px solid #fff" }}
                    className="div back_img"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="800"
                  ></div>
                </div>
              </Col>
              <Col md={2}>
                <div className="div about_hlf_rigt">
                  <div
                    style={{ borderTop: "1px solid #fff" }}
                    className="div back_img"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default About;
