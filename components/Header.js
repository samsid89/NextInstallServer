import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Lottie from "react-lottie";

import animationData from "../lotties/transform-1.json";
import { Consumer } from "./Context";

const Header = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "noScale",
    },
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header_inner");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const show = () => {
    const navShow = document.querySelector(".main_menu");
    navShow.classList.add("show");
  };
  const remove = () => {
    const navShow = document.querySelector(".main_menu");
    navShow.classList.remove("show");
  };

  return (
    <>
      <header className="main_head">
        <Container fluid>
          <Row>
            <Col md={2}>
              <div className="header_inner">
                <div className="logo">
                  <Link href="/">
                    <a className="a logo-desktop">
                      <img
                        className="img"
                        src="/images/logo-vertical.svg"
                        alt="And Academy"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="a logo-mobile">
                      <img
                        className="img"
                        src="/images/logo.svg"
                        alt="And Academy"
                      />
                    </a>
                  </Link>
                </div>
                <button onClick={show} className="button toggle_button">
                  <span className="span top_line"></span>
                  <span className="span bottom_line"></span>
                </button>
                <Nav defaultActiveKey="#home" className="flex-column main_menu">
                  <button onClick={remove} className="button toggle_button">
                    <span className="span top_line"></span>
                    <span className="span bottom_line"></span>
                  </button>
                  <Nav.Link className="a" href="#about-us">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link className="a" href="#Courses">
                    COURSES
                  </Nav.Link>
                  <Nav.Link className="a" href="#CareerSupport">
                    CAREER SUPPORT
                  </Nav.Link>
                  <Nav.Link className="a" href="#MeettheMentors">
                    MENTORS
                  </Nav.Link>
                  <Nav.Link className="a" href="#AdmissionProcess">
                    ADMISSIONS
                  </Nav.Link>
                  <Nav.Link className="a" href="#FAQ">
                    FAQs
                  </Nav.Link>
                  <Nav.Link className="a" href="#contact">
                    CONTACT
                  </Nav.Link>

                  <Consumer>
                    {({ data, handlecheck }) => (
                      <Nav.Link
                        className="a last_links"
                        eventKey="link-2"
                        onClick={() => {
                          handlecheck(true);
                        }}
                      >
                        ENQUIRY{" "}
                        <img className="img" src="/images/arrow_up.svg" />
                      </Nav.Link>
                    )}
                  </Consumer>

                  <Nav.Link
                    className="a last_links"
                    href="https://apply.andacademy.com/"
                    target={"_blank"}
                    eventKey="link-2"
                  >
                    APPLY NOW <img className="img" src="/images/arrow_up.svg" />
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col md={8}>
              <div className="transform_div">
                <Lottie options={defaultOptions} />
              </div>
            </Col>
            <Col className="explore_col" md={2}>
              <div className="explor_dv_hght" style={{ height: "100vh" }}>
                <a className="a explore_anch" href="#Courses">
                  <span className="span img_span">
                    <img className="img" src="/images/arrow_large.svg" />
                  </span>
                  <span className="span txt_span">EXPLORE COURSES</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
