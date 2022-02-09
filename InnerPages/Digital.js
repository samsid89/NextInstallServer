import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ScriptTag from "react-script-tag";
import $ from "jquery";
import ModalPopup from "../components/ModalPopup";
import Link from "next/link";

import { Consumer } from "../components/Context";
import FooterInner from "./FooterInner";

function Digital(props) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../css/DigitalStyle.css" />
			  <link rel="stylesheet" href="../css/FooterInner.css" />
        <meta
          name="description"
          content="Digital Marketing Courses - Learn Digital Brand Communication & Digital Marketing with our 25-week Diploma course. Online-Classes with live sessions from industry professionals, Apply now."
        />

        <meta
          name="keywords"
          content="digital brand communication course, digital brand communication diploma, digital marketing and communication diploma, online digital marketing and communication course, online digital marketing course, digital marketing diploma, digital brand communication course, AND Academy"
        />
        <title>
          Digital Marketing & Digital Brand Communication Course | AND Academy
        </title>
      </Helmet>
      <div id="loader" className="loader"></div>
      <header className="header" id="myHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 no_padd_col logo_col">
              <Link href="/">
                <a className="a logo">
                  <div className="logo_img"></div>
                </a>
              </Link>
            </div>
            <div className="col-md-7"></div>
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
                    className="a download_broch_1"
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
            <div className="col-md-2 bord-right center_sec no_padd_col center_sec_image">
              <div className="home_center_img">
                <div
                  style={{
                    background:
                      "url(../images/Digital/home-center-im.jpg) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    backgroundPosition: "center center",
                  }}
                ></div>
              </div>

              <div className="text-div text-div-cent"></div>
            </div>
            <div className="col-md-5  center_sec motion_section">
              <lottie-player
                class="main_animation"
                id="motion_dv"
                src="../images/Digital/landing_motion.json"
                background="transparent"
                speed="1"
                pause="1000"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "305px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-md-5 mob_padding_no desk_padding_right_0 right_last_sec">
              <div className="row">
                <div className="col-md-5">
                  <div className="text-div">
                    <p className="p">
                      Learn to ideate, design, and promote your brand messaging
                      through visual communication across various digital
                      platforms.
                    </p>
                    <h2 className="h2 desk-h2">
                      ONLINE COURSE <br />
                      25 WEEKS
                      <br />
                      LIVE LECTURE <br />
                      PLACEMENT SUPPORT
                    </h2>
                    <h2 className="h2 mob-h2">
                      Online | 25 weeks | Live lecture | Placement support
                    </h2>
                    <h3 className="h3">Application Deadline: 26.02.2022</h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="home_right_img">
                    <div
                      style={{
                        background:
                          "url(../images/Digital/home-right-new.webp) no-repeat",
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
                    className="a download_broch"
                  >
                    DOWNLOAD BROCHURE&nbsp;
                    <lottie-player
                      class="download_broch_icon"
                      id="motion_dv"
                      src="../images/Digital/arrow_landingpage.json"
                      background="transparent"
                      speed="1"
                      pause="1000"
                      style={{
                        width: "50px",
                        height: "50px",
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
                  Live online
                  <br />
                  classes
                </h3>
                <p className="p">
                  25-week intensive cohort-based learning (6 hrs/week){" "}
                </p>
              </div>
              <div className="classes_div cl_dv_2">
                <h3 className="h3">
                  Learn from <br />
                  practitioners
                </h3>
                <p className="p">
                  Leading faculty and industry experts from India and world over
                </p>
              </div>
              <div className="classes_div cl_dv_3">
                <h3 className="h3">
                  Career
                  <br />
                  enhancement
                </h3>
                <p className="p">
                  Guaranteed placement assistance from a dedicated careers
                  division
                </p>
              </div>
              <div className="classes_div cl_dv_4">
                <h3 className="h3">
                  Professional <br />
                  networking
                </h3>
                <p className="p">
                  Build a network of design professionals and make lifelong
                  connections
                </p>
              </div>
              <div className="classes_div mob_img">
                <img
                  className="img"
                  src="../images/Digital/course-img-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="first_course_img">
                <div
                  style={{
                    background:
                      "url(../images/Digital/course-imag-1.jpg) no-repeat",
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
                      "url(../images/Digital/course-imag-2.jpg) no-repeat",
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
                  <div className="upper_half">Visualizer</div>
                  <div className="lower_half">
                    <div
                      style={{
                        background:
                          "url(../images/Digital/futuer-job-half-1.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half"></div>
                  <div className="lower_half">
                    Creative
                    <br /> Director
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Art <br /> Director
                  </div>
                  <div className="lower_half">
                    <div
                      style={{
                        background: "url(../images/Digital/61x.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half"></div>
                  <div className="lower_half">
                    Social
                    <br /> Media
                    <br /> Strategist
                  </div>
                </div>
                <div className="future_div last_future_div">
                  <div className="upper_half">
                    <div
                      style={{
                        background:
                          "url(../images/Digital/futuer-job-half-2.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                  <div className="lower_half"></div>
                  <div className="lower_half">
                    Content
                    <br /> Strategist
                  </div>
                </div>

                <div className="future_div">
                  <div className="upper_half">
                    Digital
                    <br /> Brand
                    <br /> Manager
                  </div>
                  <div className="lower_half"></div>
                </div>
                <div className="future_div">
                  <div className="all_full">
                    <div
                      style={{
                        background:
                          "url(../images/Digital/futuer-job-full-2.jpg) no-repeat",
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
          <div className="upper_half">Visualizer</div>
          <div className="lower_half">
            Creative
            <br /> Director
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">
            Art
            <br /> Director
          </div>
          <div className="lower_half">
            Content <br /> Strategist
          </div>
        </div>
        <div className="future_div">
          <div className="all_full">
            <div
              style={{
                background:
                  "url(../images/Digital/futuer-job-full-2.jpg) no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="future_div">
          <div className="upper_half">
            <div
              style={{
                background:
                  "url(../images/Digital/futuer-job-half-1.jpg) no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="future_div last_future_div">
          <div className="upper_half">
            Social Media
            <br /> Strategist
          </div>
          <div className="lower_half">
            Digital Brand
            <br /> Manager
          </div>
        </div>
      </section>
      <section className="course-structure-title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Course structure</h2>
              <p className="p">
                This course will equip you with all critical skills to manage a
                brand’s digital assets and deliver compelling content, through
                strategy, design and marketing. We prepare you for the industry
                with real-world briefs. You will learn to operate across all
                channels of communications such as ecommerce, social media,
                email and others, which are integral to brand engagement.{" "}
              </p>
              <h3 className="h3">25 weeks course structure</h3>
            </div>
          </div>
          <div className="row number_row">
            <div className="col-md-2 mobile_first">
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
                    <li className="li">Composition principle </li>
                    <li className="li">Object motion</li>
                    <li className="li">Camera motion</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div second_div">
                <div className="number_div">6</div>
                <div className="number_div">7</div>
                <div className="number_div">8</div>
                <div className="number_div">9</div>
                <div className="below_box">
                  <h4 className="h4">Introduction to Digital Media</h4>
                  <ul className="ul">
                    <li className="li">What is digital?</li>
                    <li className="li">Channels and assets</li>
                    <li className="li">Basics of digital channels</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div third_div">
                <div className="number_div">10</div>
                <div className="number_div">11</div>
                <div className="number_div">12</div>
                <div className="number_div">13</div>
                <div className="below_box">
                  <h4 className="h4">Channels of Digital Media</h4>
                  <ul className="ul">
                    <li className="li">Content & social Media</li>
                    <li className="li">Mobile and advertising</li>
                    <li className="li">MarTech introduction</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div fourth_div">
                <div className="number_div">14</div>
                <div className="number_div">15</div>
                <div className="number_div">16</div>
                <div className="number_div">17</div>
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
                <div className="number_div">18</div>
                <div className="number_div">19</div>
                <div className="number_div">20</div>
                <div className="number_div">21</div>
                <div className="below_box">
                  <h4 className="h4">Content Marketing</h4>
                  <ul className="ul">
                    <li className="li">Video content</li>
                    <li className="li">Stories</li>
                    <li className="li">Infographics and memes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="first_div sixth_div">
                <div className="number_div">22</div>
                <div className="number_div">23</div>
                <div className="number_div">24</div>
                <div className="number_div">25</div>
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
          <div className="row">
            <div className="col-md-12">
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    onClick={() => {
                      handlecheck(true);
                    }}
                    className="a download_curri"
                  >
                    DOWNLOAD CURRICULUM
                    <lottie-player
                      class="download_broch_icon yellow"
                      id="motion_dv"
                      src="../images/Digital/arrow_landingpage-red.json"
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
      <section className="software-traing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Software & tools</h2>
            </div>
            <div className="col-md-3">
              <p className="p">
                Photoshop
                <br />
                Illustrator
                <br />
                Indesign
                <br />
                Adobe Spark
                <br />
                Canva
                <br />
                Hootsuite
              </p>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  background:
                    "url(../images/Digital/software-training.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center",
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
              <p className="p">
                The programme is for anyone who is enthusiastic to learn about
                communication design and digital marketing. If you have prior
                exposure in design, that’s even better.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="h3">
                Looking for a comprehensive Visual Communication programme?
              </h3>
              <p className="p">
                Apply for our 1 year PG Diploma program in Communication Design
                with specialisation in User Experience Design (UX/UI), Motion
                Graphics and Digital Brand Communication. Open to graduates from
                any field.{" "}
              </p>
              <a
                className="a"
                href="https://apply.andacademy.com/"
                target="_blank"
              >
                <img
                  className="tick_img img"
                  height="44"
                  src="../images/Digital/tick_icon_black.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="eligiblity_img">
              <div
                className="cent_back_img"
                style={{
                  background: "url(../images/Digital/no-prior-img.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
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
                Tuition costs for program <br />
                is INR 1,00,000 + GST
              </h4>
              <p className="p">
                Cost is inclusive of in-class learning, online resources,
                project feedback and mentored support. Additionally you will
                also get a paid subscription of Adobe Creative Cloud (AdobeXD,
                Adobe Photoshop, Adobe Illustrator and more).
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="h4">EMI starting at just INR 7,500 per month*</h4>
              <div className="enroll_dv">
                <p className="p">
                  *Indicative monthly EMI
                  <br />
                  Contact our team to know <br />
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
                        className="tick_img img"
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
                Not sure about which <br />
                programme to pick ?
              </h2>
              <Consumer>
                {({ data, handlecheck }) => (
                  <a
                    onClick={() => {
                      handlecheck(true);
                    }}
                    className="a"
                  >
                    CONSULT CAREER ADVISORS
                    <lottie-player
                      class="download_broch_icon yellow"
                      id="motion_dv"
                      src="../images/Digital/arrow_landingpage-yellow.json"
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
      <section className="explore-more">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Explore more specialisation courses </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec yellow_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Link href="/motion-graphics-animation-course">
                <a className="a anchor_whole">
                  <span></span>
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">Motion Graphics Diploma</h5>
                  <p className="p">
                    Bring new life to static images with a course in motion
                    graphics using animation and visual effects.
                    <img
                      className="tick_img img"
                      height="44"
                      src="../images/Digital/tick_icon.svg"
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
                    "url(../images/Digital/motion_below_box.webp) no-repeat",
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
                    "url(../images/Digital/user_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
            <div className="col-md-8">
              <Link href="/user-experience-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">User Experience Design Diploma</h5>
                  <p className="p">
                    Create mobile apps, websites and other digital products that
                    connect with users in relevant and meaningful ways.
                    <img
                      className="tick_img img"
                      height="44"
                      src="../images/Digital/tick_icon_black.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec another_white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 yellow_div">
              <Link href="graphic-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">Beginner Level </h6>
                  <h5 className="h5">Graphic Design Diploma</h5>
                  <p className="p">
                    Master the fundamentals of graphic design, from colour
                    theory, composition and typography to creative applications
                    and design processes.
                    <img
                      className="tick_img img"
                      height="44"
                      src="../images/Digital/tick_icon_red.svg"
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
                    "url(../images/Digital/graphic_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec blue_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Digital/interior_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="col-md-8 blue_div">
              <Link href="interior-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">beginner Level </h6>
                  <h5 className="h5">Interior Design Diploma</h5>
                  <p className="p">
                    Design and build functionally aesthetic residential and
                    commercial spaces.
                    <img
                      className="tick_img img"
                      height="44"
                      src="../images/Digital/tick_icon_black.svg"
                      alt=""
                    />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterInner></FooterInner>
      <ModalPopup data={props.data}></ModalPopup>
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
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
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => { $(window).trigger("resize");
  }, 500);
  });

  document.addEventListener("DOMContentLoaded", function (event) {
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
export default Digital;
