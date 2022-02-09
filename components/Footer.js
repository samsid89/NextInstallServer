import React from "react";
import { Container, Row, Col, Accordion, Modal, Button } from "react-bootstrap";
import Link from "next/link";
import { Consumer } from "./Context";

const Footer = (props) => {
  return (
    <>
      <footer className="Footer">
        <Container fluid>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col md={3}>
              <h5 className="h5">MEET US AT</h5>
              <p className="p">
                IIAD Campus,
                <br /> B-26, Okhla Phase-1,
                <br /> New Delhi 110020
              </p>
            </Col>
            <Col md={3}>
              <h5 className="h5">WRITE TO US </h5>
              <p className="p">
                <a className="a" href="mailto:apply@andacademy.com">
                  apply@andacademy.com
                </a>
              </p>
              <p className="p">
                <a className="a" href="mailto:info@andacademy.com">
                  info@andacademy.com
                </a>
              </p>
              <p className="p socialMedai mob_hidden">
                <a className="a" href="#">
                  <img className="img" src="/images/twitter.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/facebook.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/linkedin.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/instagram.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/youtube.svg" alt="" />
                </a>
              </p>
            </Col>
            <Col md={3}>
              <h5 className="h5">CALL US ON</h5>
              <p className="p">
                <a className="a" href="telto:919289281414">
                  +91 9289 281414
                </a>
              </p>
              <p className="p">
                <a className="a" href="telto:911141380000">
                  +91 11 4138 0000
                </a>
              </p>
              <p className="p socialMedai desk_hidden">
                <a className="a" href="#">
                  <img className="img" src="/images/twitter.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/facebook.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/linkedin.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/instagram.svg" alt="" />
                </a>
                <a className="a" href="#">
                  <img className="img" src="/images/youtube.svg" alt="" />
                </a>
              </p>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col md={3}>
              <div className="div">
                <h5 className="h5">KICKSTART COURSES </h5>
                <p className="p">
                  <Link href="/graphic-design-course">
                    <a className="a">Graphic Design Diploma</a>
                  </Link>
                </p>
                <p className="p">
                  <Link href="/interior-design-course">
                    <a className="a">Interior Design Diploma</a>
                  </Link>
                </p>
                <p className="p">
                  <Link href="/communication-design-pg-diploma">
                    <a className="a">Communication Design PG Diploma</a>
                  </Link>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="div">
                <h5 className="h5">ADVANCE COURSES </h5>
                <p className="p">
                  <Link href="/user-experience-design-course">
                    <a className="a">User Experience Diploma</a>
                  </Link>
                </p>
                <p className="p">
                  <Link href="/motion-graphics-animation-course">
                    <a className="a">Motion Graphics Diploma</a>
                  </Link>
                </p>
                <p className="p">
                  <Link href="/digital-brand-communication-course">
                    <a className="a">Digital Brand Communication Diploma</a>
                  </Link>
                </p>
              </div>
            </Col>
            <Col md={3}></Col>
            <Col md={1}></Col>
          </Row>
          <Row className="copyright">
            <Col md={2}>&nbsp;</Col>
            <Col md={10}>
              <p className="p">
                Copyright 2022 AND Academy | All Rights Reserved
              </p>
              <a
                className="a"
                className="termsAnchor"
                href="pdf/Application_Portal_Term_&_Condition.pdf"
                target="_blank"
              >
                Terms and Conditions
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer_fixed">
        <Container fluid>
          <Row>
            <Col xs={4}>
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    className="a"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handlecheck(true);
                    }}
                  >
                    ENQUIRY
                  </a>
                )}
              </Consumer>
            </Col>
            <Col xs={4}>
              <a
                className="a"
                href="https://apply.andacademy.com/"
                target={"_blank"}
              >
                APPLY NOW
              </a>
            </Col>
            <Col xs={4}>
              <a className="a" href="#">
                CHAT
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
