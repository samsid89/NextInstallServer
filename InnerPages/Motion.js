import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ScriptTag from "react-script-tag";
import ModalPopup from "../components/ModalPopup";
import { Consumer } from "../components/Context";
import FooterInner from "./FooterInner";
import Link from "next/link";

var $;
$ = require("jquery");

function Motion(props) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../css/MotionStyle.css" />
			  <link rel="stylesheet" href="../css/FooterInner.css" />

        <meta
          name="description"
          content="Learn Motion Graphics, Animation and VFX with our 25-week Diploma course. Online-Classes with live sessions from industry professionals,  Apply now."
        />

        <meta
          name="keywords"
          content="motion graphics course, motion graphics diploma, online motion graphics & animation course, motion graphics & animation diploma, motion graphics course online, diploma in motion graphics, AND Academy"
        />
        <title>Motion Graphics - Animation & VFX Course | AND Academy</title>
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
            <div className="col-md-5  center_sec motion_section">
              <lottie-player
                id="motion_dv"
                class="main_animation"
                src="../images/Motion/landing_motion.json"
                background="transparent"
                speed="1"
                pause="1000"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "345px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-md-2 bord-right center_sec no_padd_col center_sec_image">
              <div className="home_center_img">
                <div
                  style={{
                    background:
                      "url(../images/Motion/home-center-im.jpg) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>

              <div className="text-div text-div-cent">
                <p className="p">
                  Bring new life to static images with a course in Motion
                  Graphics using animation & visual effects.{" "}
                </p>
                <h2 className="h2 desk-h2">
                  ONLINE COURSE <br className="br" />
                  25 WEEKS
                  <br className="br" />
                  LIVE LECTURE <br className="br" />
                  PLACEMENT SUPPORT
                </h2>
                <h2 className="h2 mob-h2">
                  Online | 25 weeks | Live lecture | Placement support
                </h2>
              </div>
            </div>
            <div className="col-md-5 mob_padding_no desk_padding_right_0 right_last_sec">
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
                          "url(../images/Motion/home-right-new.webp) no-repeat",
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
                      src="../images/Motion/arrow_landingpage.json"
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
              <div className="classes_div cl_dv_1" id="div1">
                <h3 className="h3">
                  Live online
                  <br className="br" />
                  classes
                </h3>
                <p className="p">
                  25-week intensive cohort-based learning (6 hrs/week){" "}
                </p>
              </div>
              <div className="classes_div cl_dv_2" id="div2">
                <h3 className="h3">
                  Learn from <br className="br" />
                  practitioners
                </h3>
                <p className="p">
                  Leading faculty and industry experts from India and world over
                </p>
              </div>
              <div className="classes_div cl_dv_3" id="div3">
                <h3 className="h3">
                  Career
                  <br className="br" />
                  enhancement
                </h3>
                <p className="p">
                  Guaranteed placement assistance from a dedicated careers
                  division
                </p>
              </div>
              <div className="classes_div cl_dv_4" id="div4">
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
                <img
                  className="img"
                  src="../images/Motion/course-img-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="first_course_img">
                <div
                  style={{
                    background:
                      "url(../images/Motion/course-imag-1.jpg) no-repeat",
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
                      "url(../images/Motion/course-imag-2.jpg) no-repeat",
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
                  <div className="upper_half"></div>
                  <div className="lower_half">
                    <img
                      className="img"
                      src="../images/Motion/m51x.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <p className="p">
                      Motion
                      <br className="br" /> Graphic
                      <br className="br" /> Designer
                    </p>
                  </div>
                  <div className="lower_half">
                    Character
                    <br className="br" /> Designer
                  </div>
                </div>
                <div className="future_div">
                  <div className="all_full">
                    <img
                      className="img"
                      src="../images/Motion/futuer-job-full-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Cartoon
                    <br className="br" /> Animator
                  </div>
                  <div className="lower_half">
                    Filmmaker <br className="br" />
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <img
                      className="img"
                      src="../images/Motion/futuer-job-half-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="lower_half">
                    Animation
                    <br className="br" /> Director
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Video
                    <br className="br" /> Designer
                  </div>
                  <div className="lower_half">
                    Animator
                    <br className="br" />
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Art
                    <br className="br" /> Director
                  </div>
                  <div className="lower_half"></div>
                </div>
                <div className="future_div">
                  <div className="all_full">
                    <img
                      className="img"
                      src="../images/Motion/futuer-job-full-2.jpg"
                      alt=""
                    />
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
              Motion
              <br className="br" /> Graphic
              <br className="br" /> Designer
            </p>
          </div>
          <div className="lower_half">
            Character
            <br className="br" /> Designer
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">
            Animator
            <br className="br" />
          </div>
          <div className="lower_half">
            Cartoon
            <br className="br" /> Animator
          </div>
        </div>
        <div className="future_div">
          <div className="all_full">
            <img
              className="img"
              src="../images/Motion/futuer-job-full-1.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="future_div">
          <div className="all_full">
            <img
              className="img"
              src="../images/Motion/futuer-job-full-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">
            Video
            <br className="br" /> Designer
          </div>
          <div className="lower_half">
            Filmmaker
            <br className="br" />
          </div>
        </div>

        <div className="future_div">
          <div className="upper_half">
            Art
            <br className="br" /> Director
          </div>
          <div className="lower_half">
            Animation
            <br className="br" />
            Director
          </div>
        </div>
      </section>
      <section className="course-structure-title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Course structure</h2>
              <p className="p">
                Learn to use various digital tools to bring static images to
                life by manipulating graphic elements, time and space. Our
                rigorous ‘learning by doing’ approach will prepare you for the
                real industry with practical design briefs in the field of
                motion graphics and animation.{" "}
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
                    <li className="li">Elements of design</li>
                    <li className="li">Composition </li>
                    <li className="li">Colour theory</li>
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
                <div className="number_div">10</div>
                <div className="number_div">11</div>
                <div className="number_div">12</div>
                <div className="number_div">13</div>
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
                <div className="number_div">14</div>
                <div className="number_div">15</div>
                <div className="number_div">16</div>
                <div className="number_div">17</div>
                <div className="below_box">
                  <h4 className="h4">Character Design</h4>
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
                <div className="number_div">18</div>
                <div className="number_div">19</div>
                <div className="number_div">20</div>
                <div className="number_div">21</div>
                <div className="below_box">
                  <h4 className="h4">Motion Graphics for Gamification</h4>
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
                <div className="number_div">22</div>
                <div className="number_div">23</div>
                <div className="number_div">24</div>
                <div className="number_div">25</div>
                <div className="below_box">
                  <h4 className="h4">Motion Design System</h4>
                  <ul className="ul">
                    <li className="li">
                      Creating brands design system: Attributes &
                      characteristics
                    </li>
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
                      src="../images/Motion/arrow_landingpage-yellow.json"
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
                <br className="br" />
                Illustrator
                <br className="br" />
                After Effects
                <br className="br" />
                Premier Pro
                <br className="br" />
                Cinema 4d
              </p>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  background: "url(images/Motion/m91x.webp) no-repeat",
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
              <p className="p">
                The programme is designed for anyone with a keen interest in
                animation and motion graphics. If you have prior exposure in
                design or allied fields, that’s even better.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="h3">
                Looking for a comprehensive Visual Communication programme?
              </h3>
              <p className="p">
                Apply for our 1 year PG Diploma program in Communication Design
                with specialisation in User Experience (UX/UI), Motion Graphics
                and Digital Brand Communication. Open to graduates from any
                field.{" "}
              </p>
              <a
                className="a"
                href="https://apply.andacademy.com/"
                target="_blank"
              >
                <img
                  className="img tick_img"
                  src="../images/Motion/tick_icon_black.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="eligiblity_img">
              <div
                className="cent_back_img"
                style={{
                  background: "url(../images/Motion/no-prior-img.jpg) no-repeat",
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
                Tuition costs for program <br className="br" />
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
                      className="a"
                    >
                      <img
                        className="img tick_img"
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
                Not sure about which <br className="br" />
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
                      src="../images/Motion/arrow_landingpage-yellow.json"
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
              <Link href="/user-experience-design-course">
                <a className="a anchor_whole">
                  <span></span>
                  <h6 className="h6">Intermediate Level </h6>
                  <h5 className="h5">User Experience Design Diploma</h5>
                  <p className="p">
                    Create mobile apps, websites and other digital products that
                    connect with users in relevant and meaningful ways.
                    <br className="br" />
                    <div className="mt-5">
                      <img
                        className="img tick_img"
                        src="../images/Motion/tick_icon_black.svg"
                        alt=""
                      />
                    </div>
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Motion/user_below_box.jpg) no-repeat",
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
                    "url(../images/Motion/digital_below_box.webp) no-repeat",
                  backgroundSize: "cover",
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
                    Learn to ideate, design, and promote your brand messaging
                    through visual communication across various digital
                    platforms.
                    <br className="br" />
                    <div className="mt-5">
                      <img
                        className="img tick_img"
                        src="../images/Motion/tick_icon_red.svg"
                        alt=""
                      />
                    </div>
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
                    Master the fundamentals of graphic design across colour
                    theory, composition, typography, creative applications and
                    design processes.
                    <br className="br" />
                    <div className="mt-5">
                      <img
                        className="img tick_img"
                        src="../images/Motion/tick_icon_red.svg"
                        alt=""
                      />
                    </div>
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/Motion/graphic_below_box.webp) no-repeat",
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
                    "url(../images/Motion/interior_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="col-md-8 blue_div">
              <Link href="/interior-design-course">
                <a className="a anchor_whole">
                  <h6 className="h6">beginner Level </h6>
                  <h5 className="h5">Interior Design Diploma</h5>
                  <p className="p">
                    Design and build functionally aesthetic residential and
                    commercial spaces.
                    <br className="br" />
                    <div className="mt-5">
                      <img
                        className="img tick_img"
                        src="../images/Motion/tick_icon_black.svg"
                        alt=""
                      />
                    </div>
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
    var bot_height = d;

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
    setTimeout(() => {
      $(window).trigger("resize");
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

export default Motion;
