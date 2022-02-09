import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ScriptTag from "react-script-tag";
import $ from "jquery";
import Link from "next/link";
import ModalPopup from "../components/ModalPopup";
import { Consumer } from "../components/Context";
import FooterInner from "./FooterInner";

global.jQuery = global.$ = require("jquery");

function Communication(props) {

  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../css/CommunicationStyle.css" />
			  <link rel="stylesheet" href="../css/FooterInner.css" />

        <meta
          name="description"
          content="Launch your career in design with our PG Diploma and become an expert in Visual Communication, Graphic Design, UX/UI, Motion Graphics and much more, apply now. "
        />
        <meta
          name="keywords"
          content="visual communication diploma, visual communication course, communication design diploma, diploma in visual communication design, PG diploma in visual communication, PG Diploma in communication design, communication design , communication design courses, communication design program, courses in communication design, AND Academy"
        />
        <title>
          PG Diploma in Communication Design | Visual Communication Course
        </title>
      </Helmet>
      <div id="loader" className="loader"></div>
      <header className="header" id="myHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Link href="/">
                <a className="a logo">
                  <div className="logo_img"></div>
                </a>
              </Link>
            </div>
            <div className="col-md-3">
              <Link href="/">
                <a className="a about_anch">ABOUT</a>
              </Link>
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    onClick={() => {
                      handlecheck(true);
                    }}
                    className="download_broch_1"
                  >
                    BROCHURE
                    <lottie-player
                      class="download_broch_icon"
                      id="motion_dv"
                      src="../images/Motion/arrow_landingpage.json"
                      background="transparent"
                      speed="1"
                      pause="1000"
                      style={{
                        width: "30px",
                        height: "30px",
                        position: "relative",
                        top: "4px",
                      }}
                      loop
                      autoplay
                    ></lottie-player>
                  </a>
                )}
              </Consumer>
            </div>
          </div>
        </div>
      </header>
      <div id="overflow_hidden"></div>
      <section className="banner">
        <div className="container-fluid">
          <div className="row first_row">
            <div className="col-md-5  center_sec motion_section">
              <lottie-player
                id="motion_dv"
                src="../images/Communication/landing_motion.json"
                background="transparent"
                speed="1"
                pause="1000"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "440px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                loop
                autoplay
              ></lottie-player>
              <div className="specialis_div">
                <p className="specialis">With specialisation in-</p>
                <p className="user_type">
                  USER EXPERIENCE DESIGN / MOTION GRAPHICS / DIGITAL BRAND
                  COMMUNICATION
                </p>
              </div>
            </div>
            <div className="col-md-3 bord-right center_sec no_padd_col center_sec_image">
              <div className="home_center_img">
                <div
                  style={{
                    background: "url(../images/Communication/61x.webp) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    backgroundPosition: "center center",
                  }}
                ></div>
              </div>
              <div className="text-div text-div-cent">
                <p className="p">
                  Build your career with our industry integrated PG Diploma that
                  covers the entire spectrum of visual communication from
                  fundamentals to a specialisation in a chosen field.
                </p>
                <h2 className="h2 desk-h2">
                  1 Year
                  <br className="br" />
                  Hybrid Model (On campus + online)
                  <br className="br" />
                  Placement Guarantee
                </h2>
                <div className="mob-h2">
                  <div className="specialis_div_mob">
                    Specialisations : <br className="br" />
                    User Experience Design / <br className="br" />
                    Digital Brand Communication /<br className="br" /> Motion
                    Graphic Design
                    <h3 className="h3">Application Deadline: 26.02.2022</h3>
                  </div>
                  <div className="feat_list">
                    <ul className="ul">
                      <li className="li">1 Year</li>
                      <li className="li">
                        Hybrid Model
                        <br className="br" />
                        (On campus + online)
                      </li>
                      <li className="li">Placement Guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mob_padding_no desk_padding_right_0 right_last_sec">
              <div className="row">
                <div className="col-md-5">
                  <div className="text-div">
                    <h3 className="h3">Application Deadline: 26.02.2022</h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="home_right_img">
                    <div
                      style={{
                        background:
                          "url(../images/Communication/home-right-new.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    onClick={() => {
                      handlecheck(true);
                    }}
                    className="download_broch"
                  >
                    DOWNLOAD BROCHURE
                    <lottie-player
                      class="download_broch_icon"
                      id="motion_dv"
                      src="../images/Communication/arrow_landingpage.json"
                      background="transparent"
                      speed="1"
                      pause="1000"
                      style={{
                        width: "40px",
                        height: "40px",
                        position: "relative",
                        top: "4px",
                      }}
                      loop
                      autoplay
                    ></lottie-player>
                  </a>
                )}
              </Consumer>
            </div>
          </div>
        </div>
      </section>
      <section className="course-title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Course highlights </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="course-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="classes_div cl_dv_1">
                <h3 className="h3">
                  Hybrid
                  <br className="br" />
                  learning
                </h3>
                <p className="p">
                  20 weeks on-campus intense module followed by a 20-week online
                  specialisation, integrated with a 6-month industry internship
                </p>
              </div>
              <div className="classes_div cl_dv_2">
                <h3 className="h3">
                  Learn from
                  <br className="br" />
                  experts
                </h3>
                <p className="p">
                  Lectures by leading faculties and dedicated mentorship by
                  industry professionals from around the world
                </p>
              </div>
              <div className="classes_div cl_dv_3">
                <h3 className="h3">
                  Guaranteed
                  <br className="br" />
                  Placements
                </h3>
                <p className="p">
                  This programme comes with a placement guarantee and internship
                  support
                </p>
              </div>
              <div className="classes_div cl_dv_4">
                <h3 className="h3">
                  Professional <br className="br" />
                  networking
                </h3>
                <p className="p">
                  Build a network of design professionals and make lifelong
                  connections
                </p>
              </div>
              <div className="classes_div mob_img">
                <div
                  style={{
                    background: "url(../images/Communication/61x.webp) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="first_course_img">
                <div
                  style={{
                    background:
                      "url(../images/Communication/course-imag-1.jpg) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="last_course_img">
                <div
                  style={{
                    background:
                      "url(../images/Communication/prof-netw.webp) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="future_title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Future job roles </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="future_sec mob_hid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="max_widt">
                <div className="future_div">
                  <div className="upper_half">
                    UX/UI
                    <br className="br" />
                    Designer
                  </div>
                  <div className="lower_half">
                    <div
                      style={{
                        background:
                          "url(../images/Communication/91x.webp) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    UX
                    <br className="br" />
                    Researcher
                  </div>
                  <div className="lower_half">
                    Information
                    <br className="br" />
                    Designer
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Visual
                    <br className="br" />
                    Designer
                  </div>
                  <div className="lower_half">Animator</div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <div
                      style={{
                        background:
                          "url(../images/Communication/31x.webp) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                  <div className="lower_half">
                    Motion
                    <br className="br" />
                    Graphic
                    <br className="br" />
                    Designer
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <p className="p">
                      Digital
                      <br className="br" />
                      Brand
                      <br className="br" />
                      Manager
                    </p>
                  </div>
                  <div className="lower_half">
                    Social
                    <br className="br" />
                    Media
                    <br className="br" />
                    Strategist
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Creative
                    <br className="br" />
                    Director
                  </div>
                  <div className="lower_half">
                    <div
                      style={{
                        background:
                          "url(../images/Communication/11x.webp) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <p className="p">
                      Art
                      <br className="br" />
                      Director
                    </p>
                  </div>
                  <div className="lower_half">Visualiser</div>
                </div>
                <div className="future_div">
                  <div className="all_full">
                    <div
                      style={{
                        background:
                          "url(../images/Communication/future-pic.webp) no-repeat",
                        backgroundPosition: "right",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="future_sec desk_hid">
        <div className="future_div">
          <div className="upper_half">
            <p className="p">
              UX / UI
              <br className="br" />
              Designer
            </p>
          </div>
          <div className="lower_half">
            Information
            <br className="br" /> Designer
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">
            UX <br className="br" /> Researcher
          </div>
          <div className="lower_half">
            Visual
            <br className="br" /> Designer
          </div>
        </div>
        <div className="future_div">
          <div className="all_full">
            <div
              style={{
                background: "url(../images/Communication/11x.webp) no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="future_div">
          <div className="all_full">
            <div
              style={{
                background: "url(../images/Communication/31x.webp) no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="future_div last_future_div">
          <div className="upper_half">Animator</div>
          <div className="lower_half">
            Motion
            <br className="br" /> Graphics
            <br className="br" /> Designer
          </div>
          <div className="lower_half">
            Digital
            <br className="br" /> Brand
            <br className="br" /> Manager
          </div>
          <div className="lower_half">
            Social
            <br className="br" /> Media
            <br className="br" /> Strategist
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">Visualiser</div>
        </div>
        <div className="future_div last_future_div">
          <div className="lower_half">Art Director</div>
          <div className="lower_half">
            Creative
            <br className="br" /> Director
          </div>
        </div>
      </section>
      <section className="course-structure-title above-course-sturuc">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Course structure</h2>
              <p className="p">
                This program offers you the most comprehensive syllabus from
                basics to industry-ready specialisation over two terms. The
                first term will teach you the fundamentals of communication
                design across colour theory, composition, typography, creative
                thinking and design process. <br className="br" />
                <br className="br" />
                In the second term, you will have the opportunity to do an
                industry internship alongside online evening classes in your
                chosen specialisation. Furthermore, you get trained in relevant
                industry-standard software and tools as well as develop a robust
                portfolio of advanced projects.
              </p>
              <h3 className="seemester_ONE">
                <span>Semester 1</span> Graphic Design Term | 20 weeks |
                On-Campus
              </h3>
            </div>
          </div>
          <div className="row number_row mob_hide_accordion">
            <div className="col-md-2 desk_first">
              <div className="first_div">
                <div className="number_div">1</div>
                <div className="number_div">2</div>
                <div className="number_div">3</div>
                <div className="number_div">4</div>
                <div className="below_box">
                  <h4 className="h4">Design History</h4>
                  <ul className="ul">
                    <li className="li">Elements of communication design</li>
                    <li className="li">History of visual art</li>
                    <li className="li">Colour, composition & typography</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div second_div">
                <div className="number_div">5</div>
                <div className="number_div">6</div>
                <div className="number_div">7</div>
                <div className="number_div">8</div>
                <div className="below_box">
                  <h4 className="h4">Elements of Design + Principles</h4>
                  <ul className="ul">
                    <li className="li">Basic graphic design</li>
                    <li className="li">Advanced colour & composition</li>
                    <li className="li">Ways of thinking</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div third_div">
                <div className="number_div">9</div>
                <div className="number_div">10</div>
                <div className="number_div">11</div>
                <div className="number_div">12</div>
                <div className="below_box">
                  <h4 className="h4">Narrative and Process</h4>
                  <ul className="ul">
                    <li className="li">Basics of narrative design</li>
                    <li className="li">The design process</li>
                    <li className="li">Corporate or brand identity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div fourth_div">
                <div className="number_div">13</div>
                <div className="number_div">14</div>
                <div className="number_div">15</div>
                <div className="number_div">16</div>
                <div className="below_box">
                  <h4 className="h4">Design Assets</h4>
                  <ul className="ul">
                    <li className="li">Design for impact</li>
                    <li className="li">Design for functionality</li>
                    <li className="li">Design for information</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div fifth_div">
                <div className="number_div">17</div>
                <div className="number_div">18</div>
                <div className="number_div">19</div>
                <div className="number_div">20</div>
                <div className="below_box">
                  <h4 className="h4">Design Systems</h4>
                  <ul className="ul">
                    <li className="li">Introduction to design system</li>
                    <li className="li">
                      A design system project: publication, wayfinding system or
                      a campaign
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="accordion width desk_hide_accordion"
            id="accordionHorizontalExample1"
          >
            <div className="card">
              <div
                className="card-header"
                data-toggle="collapse"
                data-target="#collapseOneAnother"
              >
                {" "}
                <span>&nbsp;</span>
              </div>
              <div
                id="collapseOneAnother"
                className="collapse show width"
                data-parent="#accordionHorizontalExample1"
              >
                <div className="card-body">
                  <div className="row number_row">
                    <div className="col-md-2 desk_first">
                      <div className="first_div">
                        <div className="number_div">1</div>
                        <div className="number_div">2</div>
                        <div className="number_div">3</div>
                        <div className="number_div">4</div>
                        <div className="below_box">
                          <h4 className="h4">Design History</h4>
                          <ul className="ul">
                            <li className="li">
                              Elements of communication design
                            </li>
                            <li className="li">History of visual art</li>
                            <li className="li">
                              Colour, composition & typography
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="first_div second_div">
                        <div className="number_div">5</div>
                        <div className="number_div">6</div>
                        <div className="number_div">7</div>
                        <div className="number_div">8</div>
                        <div className="below_box">
                          <h4 className="h4">
                            Elements of Design + Principles
                          </h4>
                          <ul className="ul">
                            <li className="li">Basic graphic design</li>
                            <li className="li">
                              Advanced colour & composition
                            </li>
                            <li className="li">Ways of thinking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="first_div third_div">
                        <div className="number_div">9</div>
                        <div className="number_div">10</div>
                        <div className="number_div">11</div>
                        <div className="number_div">12</div>
                        <div className="below_box">
                          <h4 className="h4">Narrative and Process</h4>
                          <ul className="ul">
                            <li className="li">Basics of narrative design</li>
                            <li className="li">The design process</li>
                            <li className="li">Corporate or brand identity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="first_div fourth_div">
                        <div className="number_div">13</div>
                        <div className="number_div">14</div>
                        <div className="number_div">15</div>
                        <div className="number_div">16</div>
                        <div className="below_box">
                          <h4 className="h4">Design Assets</h4>
                          <ul className="ul">
                            <li className="li">Design for impact</li>
                            <li className="li">Design for functionality</li>
                            <li className="li">Design for information</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="first_div fifth_div">
                        <div className="number_div">17</div>
                        <div className="number_div">18</div>
                        <div className="number_div">19</div>
                        <div className="number_div">20</div>
                        <div className="below_box">
                          <h4 className="h4">Design Systems</h4>
                          <ul className="ul">
                            <li className="li">
                              Introduction to design system
                            </li>
                            <li className="li">
                              A design system project:publication, wayfinding
                              system or a campaign
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-structure-title accordion_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mob_side_pad">
                <span>Semester 2</span> Pick a Specialisation | 20 weeks |
                Online evening classes | Industry internship
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordion width" id="accordionHorizontalExample">
                <div id="firstAccordion" className="card active">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    {" "}
                    <span>
                      01. <br className="br" />
                      USER <br className="br" />
                      EXPERIENCE <br className="br" />
                      DESIGN
                    </span>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show width"
                    data-parent="#accordionHorizontalExample"
                  >
                    <div className="card-body">
                      <div className="row number_row accordion_row">
                        {/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4 className="h4">Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4 className="h4">Visual Language</h4> 
													<ul className="ul">
														<li className="li">Introductory session</li>
														<li className="li">Elements of design</li>
														<li className="li">Colour & composition</li>
														<li className="li">Design process</li>
													</ul>
												</div>
											</div>
										</div>*/}
                        <div className="col-md-2 desk_first">
                          <div className="first_div second_div">
                            <div className="number_div">1</div>
                            <div className="number_div">2</div>
                            <div className="number_div">3</div>
                            <div className="number_div">4</div>
                            <div className="below_box">
                              <h4 className="h4">Elements of UX</h4>
                              <ul className="ul">
                                <li className="li">UX process</li>
                                <li className="li">User needs</li>
                                <li className="li">Business assets</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div third_div">
                            <div className="number_div">5</div>
                            <div className="number_div">6</div>
                            <div className="number_div">7</div>
                            <div className="number_div">8</div>
                            <div className="below_box">
                              <h4 className="h4">Scope and Structure</h4>
                              <ul className="ul">
                                <li className="li">Feature functionality</li>
                                <li className="li">Information architecture</li>
                                <li className="li">Interaction design</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fourth_div">
                            <div className="number_div">9</div>
                            <div className="number_div">10</div>
                            <div className="number_div">11</div>
                            <div className="number_div">12</div>
                            <div className="below_box">
                              <h4 className="h4">Skeleton and Surface</h4>
                              <ul className="ul">
                                <li className="li">Navigation design</li>
                                <li className="li">Interface design</li>
                                <li className="li">Information design</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fifth_div">
                            <div className="number_div">13</div>
                            <div className="number_div">14</div>
                            <div className="number_div">15</div>
                            <div className="number_div">16</div>
                            <div className="below_box">
                              <h4 className="h4">Design Sprint</h4>
                              <ul className="ul">
                                <li className="li">User onboarding</li>
                                <li className="li">Page types</li>
                                <li className="li">Dashboard design</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div sixth_div">
                            <div className="number_div">17</div>
                            <div className="number_div">18</div>
                            <div className="number_div">19</div>
                            <div className="number_div">20</div>
                            <div className="below_box">
                              <h4 className="h4">Design System Projects</h4>
                              <ul className="ul">
                                <li className="li">Content hub</li>
                                <li className="li">Online store</li>
                                <li className="li">Mobile app</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="secondAccordion" className="card">
                  <div
                    className="card-header header-2"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >
                    02. <br className="br" /> MOTION <br className="br" />
                    GRAPHICS
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse width"
                    data-parent="#accordionHorizontalExample"
                  >
                    <div className="card-body">
                      <div className="row number_row accordion_row accordion_row_2">
                        {/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4 className="h4">Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4 className="h4">Visual Language</h4> 
													<ul className="ul">
														<li className="li">Introductory session</li>
														<li className="li">Composition principle</li>
														<li className="li">Object motion</li>
														<li className="li">Camera motion</li>
													</ul>
												</div>
											</div>
										</div>*/}
                        <div className="col-md-2 desk_first">
                          <div className="first_div second_div">
                            <div className="number_div">1</div>
                            <div className="number_div">2</div>
                            <div className="number_div">3</div>
                            <div className="number_div">4</div>
                            <div className="below_box">
                              <h4 className="h4">Elements of Motion</h4>
                              <ul className="ul">
                                <li className="li">Time & space</li>
                                <li className="li">Principles of animation</li>
                                <li className="li">Composition & staging</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div third_div">
                            <div className="number_div">5</div>
                            <div className="number_div">6</div>
                            <div className="number_div">7</div>
                            <div className="number_div">8</div>
                            <div className="below_box">
                              <h4 className="h4">Motion Emotion</h4>
                              <ul className="ul">
                                <li className="li">Logo type animation</li>
                                <li className="li">Sound design</li>
                                <li className="li">Text in motion</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fourth_div">
                            <div className="number_div">9</div>
                            <div className="number_div">10</div>
                            <div className="number_div">11</div>
                            <div className="number_div">12</div>
                            <div className="below_box">
                              <h4 className="h4">Character design</h4>
                              <ul className="ul">
                                <li className="li">Character anatomy</li>
                                <li className="li">Personality & caricature</li>
                                <li className="li">Characters in motion</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fifth_div">
                            <div className="number_div">12</div>
                            <div className="number_div">14</div>
                            <div className="number_div">15</div>
                            <div className="number_div">16</div>
                            <div className="below_box">
                              <h4 className="h4">
                                Motion Graphics for Gamification
                              </h4>
                              <ul className="ul">
                                <li className="li">Gamification</li>
                                <li className="li">Title sequence</li>
                                <li className="li">Explainer videos</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div sixth_div">
                            <div className="number_div">17</div>
                            <div className="number_div">18</div>
                            <div className="number_div">19</div>
                            <div className="number_div">20</div>
                            <div className="below_box">
                              <h4 className="h4">Motion Design System</h4>
                              <ul className="ul">
                                <li className="li">
                                  Creating brands Design system: Attributes &
                                  characteristics
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="thirdAccordion" className="card">
                  <div
                    className="card-header header-3"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    03. <br className="br" />
                    DIGITAL BRAND <br className="br" />
                    COMMUNICATION
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse width"
                    data-parent="#accordionHorizontalExample"
                  >
                    <div className="card-body">
                      <div className="row number_row accordion_row accordion_row_3">
                        {/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4 className="h4">Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4 className="h4">Visual Language</h4> 
													<ul className="ul">
														<li className="li">Introductory session</li>
														<li className="li">Elements of design</li>
														<li className="li">Colour & composition</li>
														<li className="li">Design process</li>
													</ul>
												</div>
											</div>
										</div>*/}
                        <div className="col-md-2 desk_first">
                          <div className="first_div second_div">
                            <div className="number_div">1</div>
                            <div className="number_div">2</div>
                            <div className="number_div">3</div>
                            <div className="number_div">4</div>
                            <div className="below_box">
                              <h4 className="h4">
                                Introduction to Digital Media
                              </h4>
                              <ul className="ul">
                                <li className="li">What is digital?</li>
                                <li className="li">Channels and sssets</li>
                                <li className="li">Basics of digital</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div third_div">
                            <div className="number_div">5</div>
                            <div className="number_div">6</div>
                            <div className="number_div">7</div>
                            <div className="number_div">8</div>
                            <div className="below_box">
                              <h4 className="h4">Channels of Digital Media</h4>
                              <ul className="ul">
                                <li className="li">Content & social</li>
                                <li className="li">Mobile & advertising</li>
                                <li className="li">MarTech introduction</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fourth_div">
                            <div className="number_div">9</div>
                            <div className="number_div">10</div>
                            <div className="number_div">11</div>
                            <div className="number_div">12</div>
                            <div className="below_box">
                              <h4 className="h4">Revisiting Brand</h4>
                              <ul className="ul">
                                <li className="li">Brand assets</li>
                                <li className="li">Strategy</li>
                                <li className="li">Visual language & tone</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div fifth_div">
                            <div className="number_div">13</div>
                            <div className="number_div">14</div>
                            <div className="number_div">15</div>
                            <div className="number_div">16</div>
                            <div className="below_box">
                              <h4 className="h4">Content Marketing</h4>
                              <ul className="ul">
                                <li className="li">Video content</li>
                                <li className="li">Stories</li>
                                <li className="li">Infographics & memes</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="first_div sixth_div">
                            <div className="number_div">17</div>
                            <div className="number_div">18</div>
                            <div className="number_div">19</div>
                            <div className="number_div">20</div>
                            <div className="below_box">
                              <h4 className="h4">Brand Campaign Project</h4>
                              <ul className="ul">
                                <li className="li">Campaign plan</li>
                                <li className="li">Strategy</li>
                                <li className="li">Execution</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Consumer>
                    {({ data, handlecheck }) => (
                      <a
                        onClick={() => {
                          handlecheck(true);
                        }}
                        className="download_curri"
                      >
                        DOWNLOAD CURRICULUM
                        <lottie-player
                          class="download_broch_icon yellow mob_hide_arrow"
                          id="motion_dv"
                          src="../images/Communication/arrow_landingpage.json"
                          background="transparent"
                          speed="1"
                          pause="1000"
                          style={{
                            width: "60px",
                            height: "60px",
                            position: "relative",
                            top: "7px",
                          }}
                          loop
                          autoplay
                        ></lottie-player>
                        <lottie-player
                          class="download_broch_icon yellow desk_hide_arrow"
                          id="motion_dv"
                          src="../images/Communication/arrow_landingpage.json"
                          background="transparent"
                          speed="1"
                          pause="1000"
                          style={{
                            width: "60px",
                            height: "60px",
                            position: "relative",
                            top: "7px",
                          }}
                          loop
                          autoplay
                        ></lottie-player>
                      </a>
                    )}
                  </Consumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="software-traing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <h2 className="h2">Software & tools</h2>
              <h3 className="h3">Graphic design term</h3>
              <p className="p">
                Photoshop | Illustrator | Indesign | After Effects
              </p>
              <br className="br" />
              <h3 className="h3">SpecialisatioN Term</h3>
              <p className="p">
                <span>USER EXPERIENCE DESIGN: &nbsp;</span> Adobe XD | Figma |
                Sketch | Zeplin
              </p>
              <p className="p">
                <span>MOTION GRAPHICS: &nbsp;</span> Photoshop | Illustrator |
                After Effects | Premier Pro | Cinema 4d
              </p>
              <p className="para_marg_bot">
                <span>DIGTIAL BRAND COMMUNICATION: &nbsp;</span> Photoshop |
                Illustrator | Indesign | Adobe Spark | Canva | Hootsuite
              </p>
            </div>
            <div className="col-md-3" style={{ display: "none" }}></div>
            <div className="col-md-3">
              <div
                style={{
                  background: "url(../images/Communication/91x.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="eligibilty-crite">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Eligibility criteria </h2>
            </div>
            <div className="col-md-6">
              <p className="p">
                This programme is designed for graduates from any background or
                skill-set. No prior knowledge or experience of design is
                required.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="admission-process">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h3 className="h3">Admission process</h3>
              <p className="p">
                Complete your application and secure your place in a programme
                of your choice in four easy steps.
              </p>
            </div>
            <div className="col-md-6">
              <div className="adm_sec">
                <div className="adm_number">
                  <h4 className="h4">01</h4>
                  <p className="p">Submit an online application</p>
                </div>
                <div className="adm_number">
                  <h4 className="h4">02</h4>
                  <p className="p">Schedule an interview</p>
                </div>
                <div className="adm_number">
                  <h4 className="h4">03</h4>
                  <p className="p">Receive an offer letter</p>
                </div>
                <div className="adm_number">
                  <h4 className="h4">04</h4>
                  <p className="p">
                    Enroll in a programme and choose your payment plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fee-financing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h3 className="h3">Fee & Financing</h3>
              <h4 className="h4">
                Tuition costs for program <br className="br" />
                is INR 2,50,000 + GST
              </h4>
              <p className="p">
                Cost is inclusive of in-class learning, online resources,
                project feedback and mentored support. Additionally you will
                also get a paid subscription of Adobe Creative Cloud (AdobeXD,
                Adobe Photoshop, Adobe Illustrator and more).
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="h4">EMI starting at just INR 12,500 per month*</h4>
              <div className="enroll_dv">
                <p className="p">
                  *Indicative monthly EMI
                  <br className="br" />
                  Contact our team to know <br className="br" />
                  more about financing options.
                </p>
                <Consumer>
                  {({ data, handlecheck }) => (
                    <a
                      onClick={() => {
                        handlecheck(true);
                      }}
                    >
                      <img
                        className="img tick_img"
                        height="44"
                        src="../images/Motion/tick_icon.svg"
                        alt=""
                      />
                    </a>
                  )}
                </Consumer>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="cent_back_img"
                style={{
                  background: "url(../images/fee-financing-img.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="not-sure">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">
                Looking for a 6 months fast- <br className="br" />
                track program?{" "}
              </h2>
              <p className="p">
                Check out our diploma programmes in User Experience Design,
                Digital Brand communication, Motion Graphic Design, Graphic
                Design and Interior design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec yellow_sec another_yellow_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              {" "}
              <Link href="/user-experience-design-course">
                <a className="a anchor_whole">
                  <span></span>
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">User Experience Design Diploma</h5>
                  <p className="p">
                    <span>
                      Create mobile apps, websites and other digital products
                      that connect with users in relevant and meaningful ways.
                    </span>
                    <img
                      className="img tick_img"
                      height="44"
                      src="../images/Communication/tick_icon_black.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Communication/user_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec black_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Communication/digital_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                }}
              ></div>
            </div>
            <div className="col-md-8">
              <Link href="/digital-brand-communication-course">
                <a className="a anchor_whole">
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">Digital Brand Communication Diploma</h5>
                  <p className="p">
                    <span>
                      Learn to ideate, design, and promote your brand messaging
                      through visual communication across various digital
                      platforms.
                    </span>
                    <img
                      className="img tick_img"
                      height="44"
                      src="../images/Communication/tick_icon_red.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 yellow_div">
              <Link href="/graphic-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">beginner Level </h6>
                  <h5 className="h5">Graphic Design Diploma</h5>
                  <p className="p">
                    <span>
                      Master the fundamentals of graphic design, from colour
                      theory, composition and typography to creative
                      applications and design processes.
                    </span>

                    <img
                      className="img tick_img"
                      height="44"
                      src="../images/Communication/tick_icon_red.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Communication/graphic_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec another_black">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Communication/motion_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
            <div className="col-md-8">
              <Link href="/motion-graphics-animation-course">
                <a className="a anchor_whole">
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">Motion Graphics Diploma</h5>
                  <p className="p">
                    <span>
                      Bring new life to static images with a course in motion
                      graphics using animation and visual effects.
                    </span>

                    <img
                      className="img tick_img"
                      height="44"
                      src="../images/Communication/tick_icon.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec blue_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 blue_div">
              <Link href="/interior-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">beginner Level </h6>
                  <h5 className="h5">Interior Design Diploma</h5>
                  <p className="p">
                    <span>
                      Design and build functionally aesthetic residential and
                      commercial spaces.
                    </span>
                    <img
                      className="img tick_img"
                      height="44"
                      src="../images/Communication/tick_icon_black.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Communication/interior_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="not-sure">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">
                Not sure about which <br className="br" />
                programme to pick ?
              </h2>
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    onClick={() => {
                      handlecheck(true);
                    }}
                  >
                    CONSULT CAREER ADVISORS
                    <lottie-player
                      class="download_broch_icon yellow"
                      id="motion_dv"
                      src="../images/Communication/arrow_landingpage-yellow.json"
                      background="transparent"
                      speed="1"
                      pause="1000"
                      style={{
                        width: "60px",
                        height: "60px",
                        position: "relative",
                        top: "7px",
                      }}
                      loop
                      autoplay
                    ></lottie-player>
                  </a>
                )}
              </Consumer>
            </div>
          </div>
        </div>
      </section>
      <FooterInner></FooterInner>

      <ModalPopup data={props.data}></ModalPopup>
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="../js/jquery-3.2.1.slim.min.js"
      />
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      />
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      />
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="owlcarousel/owl.carousel.min.js"
      />
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      />
    </>
  );
}

if (typeof window !== "undefined") {
  $(window).on("resize", function () {
    var a = $(".cl_dv_1").outerHeight();
    var b = $(".cl_dv_2").outerHeight();
    var c = $(".cl_dv_3").outerHeight();
    var d = $(".cl_dv_4").outerHeight();
    var div_height = a + b + c;
    var bot_height = d + c;

    var div_height_mob = a + b;
    var bot_height_mob = d;
    var bot_height_mob_2 = d + 2;

    //alert(a+b+c);

    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        $(".first_course_img").css({ height: div_height_mob + "px" });
        $(".last_course_img").css({ height: bot_height_mob + "px" });
        $(".course-section .col-md-3:last-child").css({
          top: -bot_height_mob_2 + "px",
        });
        $(".classes_div.mob_img").css({ height: bot_height_mob + "px" });
      } else {
        $(".first_course_img").css({ height: div_height + "px" });
        $(".last_course_img").css({ height: bot_height + "px" });
      }
    }

    var x = window.matchMedia("(max-width: 767px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  });
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { $(window).trigger("resize");
  }, 500);
  });

  document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    var heihgt_1 = $("#myHeader").outerHeight();
    var heihgt_2 = $(".banner").outerHeight();

    var main_height = heihgt_1 + heihgt_2;
    //alert(main_height);

    function myFunction() {
      if (window.pageYOffset > main_height) {
        header.classList.add("sticky");
        $("#overflow_hidden").css({ height: heihgt_1 + "px" });
      } else {
        header.classList.remove("sticky");

        $("#overflow_hidden").css({ height: 0 + "px" });
      }
    }
  });

  var load = document.getElementById("loader");
  function loadfun() {
    /*setTimeout(function(){ load.style.display = 'none'; }, 1000);*/
    load.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    $("#firstAccordion .card-header").on("click", function () {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().addClass("active");
      }

      $("#secondAccordion").removeClass("active");
      $("#thirdAccordion").removeClass("active");
    });
    $("#secondAccordion .card-header").on("click", function () {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().addClass("active");
      }
      $("#firstAccordion").removeClass("active");
      $("#thirdAccordion").removeClass("active");
    });
    $("#thirdAccordion .card-header").on("click", function () {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().addClass("active");
      }
      $("#secondAccordion").removeClass("active");
      $("#firstAccordion").removeClass("active");
    });

    var horizontalAccordions = $(".accordion.width");
    horizontalAccordions.each(function () {
      var accordion = $(this);
      var collapse = accordion.find(".collapse");
      var bodies = collapse.find("> *");

      setTimeout(() => {
        accordion.height(accordion.height());
      }, 500);

      setTimeout(() => {
        bodies.width(bodies.eq(0).width());
        bodies.height(bodies.eq(0).height());
        collapse.not(".show").each(function () {
          $(this)
            .parent()
            .find("[data-toggle='collapse']")
            .addClass("collapsed");
        });
      }, 500);
    });
  });
  document.addEventListener("DOMContentLoaded", function (event) {
    var load = document.getElementById("loader");
    function loadfun() {
      setTimeout(() => {
        load.style.display = "none";
      }, 1500);
    }
    loadfun();
  });
}

export default Communication;
