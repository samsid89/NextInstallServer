import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class HowWeTeach extends React.Component {
  render() {
    return (
      <>
        <section className="HowWeTeach section">
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
                  How we teach
                </h2>
              </Col>
              <Col md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                  className="back_img"
                  style={{
                    backgroundImage: 'url(""))',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Col>
            </Row>
            <Row className="three_sec_row">
              <Col md={2}>&nbsp;</Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="650"
                >
                  LEARN
                  <br /> TOGETHER
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="650"
                >
                  Learn with your peers, collaborate and network.
                </p>
              </Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="700"
                >
                  SYNCHRONOUS
                  <br /> LEARNING
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="700"
                >
                  Classes support live interaction with faculty, mentors and
                  peers
                </p>
              </Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="750"
                >
                  LEARN FROM
                  <br /> PRACTITIONERS
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="750"
                >
                  Get market-ready with our expert design mentors.
                </p>
              </Col>
              <Col className="last_img_col" md={4}>
                <img
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="800"
                  className="full_width_img img"
                  src="/images/howweteach.jpg"
                  alt=""
                />
              </Col>
            </Row>
            <Row
              className="three_sec_row mob_hidden"
              style={{ display: "none" }}
            >
              <Col md={2}>&nbsp;</Col>
              <Col md={2}></Col>
              <Col md={2}></Col>
              <Col md={2}></Col>
              <Col md={4}>
                <div className="div" style={{ height: "150px" }}>
                  &nbsp;
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default HowWeTeach;
