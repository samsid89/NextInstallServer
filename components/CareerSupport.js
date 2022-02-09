import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class CareerSupport extends React.Component {
  render() {
    return (
      <>
        <section className="CareerSupport section" id="CareerSupport">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={8}>
                <h2
                  className="h2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  Career support
                  <br /> you can count on
                </h2>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="650"
                >
                  Embark on your design career with AND Academy, get mentorship
                  and placement support from start to finish, as well as
                  throughout your professional career.
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row className="number_row first_numb_row">
              <Col md={2}>&nbsp;</Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="750"
                >
                  01
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="750"
                >
                  Orientation with the Career Services Division.
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="850"
                >
                  02
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="850"
                >
                  Resume and Linkedin Profile Building & Review
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="700"
                  className="back_img"
                >
                  <div
                    className="div"
                    style={{
                      backgroundImage: 'url("/images/career_support_1.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="image_div"
                  ></div>
                </div>
              </Col>
            </Row>
            <Row className="number_row second_numb_row">
              <Col md={2}>&nbsp;</Col>
              <Col
                md={2}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="900"
              >
                <div
                  className="div"
                  style={{
                    backgroundImage: 'url("/images/career_support_2.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="back_image_sq"
                ></div>
              </Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="950"
                >
                  03
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="950"
                >
                  Interview training & communication coaching
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="980"
                >
                  04
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="980"
                >
                  Develop an impressive Portfolio to showcase your work
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row className="number_row third_numb_row">
              <Col md={2}>&nbsp;</Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1000"
                >
                  05
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1000"
                >
                  Networking and industry connections with AND Academy’s hiring
                  partners
                </p>
              </Col>
              <Col md={2}></Col>
              <Col md={2}>
                <h4
                  className="h4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1050"
                >
                  06
                </h4>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1050"
                >
                  One-on-one offer negotiation and contract support
                </p>
              </Col>
              <Col className="mob_hidden" md={2}></Col>
              <Col className="desk_hidden" md={2}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="1080"
                  style={{
                    backgroundImage: 'url("/images/career_support_1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="back_image_sq"
                ></div>
              </Col>
              <Col className="white_col" md={2}></Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default CareerSupport;
