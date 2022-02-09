import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ScriptTag from "react-script-tag";
import $ from "jquery";
import ModalPopup from "../components/ModalPopup";
import { Consumer } from "../components/Context";
import FooterInner from "./FooterInner";
import Link from "next/link";

function User(props) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../css/UserStyle.css" />
			  <link rel="stylesheet" href="../css/FooterInner.css" />
        <meta
          name="description"
          content="UX Courses - Learn UX/UI Design with our 25-Week Diploma course. Online-Classes with live sessions from industry professionals. Launch your career as a UX designer, Apply now."
        />

        <meta
          name="keywords"
          content="ui ux design course, ux courses online, ux design course, ux ui course, online ux course, user experience design courses, best ui ux design course, ui ux courses, ui design courses, user interface design courses, AND Academy"
        />
        <title>UX/UI Course | User Experience Design Diploma</title>
      </Helmet>

      <div id="loader" className="loader"></div>
      <header className="header" id="myHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <a href="/">
                <a className="a logo">
                  <div className="logo_img"></div>
                </a>
              </a>
            </div>
            <div className="col-md-3">
              <a href="/">
                <a className="a about_anch">ABOUT</a>
              </a>
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
                      class="lottie-player download_broch_icon"
                      id="motion_dv"
                      src="/images/Motion/arrow_landingpage.json"
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
                class="lottie-player main_animation"
                id="motion_dv"
                src="/images/User/landing_motion.json"
                background="transparent"
                speed="1"
                pause="1000"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "270px",
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
                    background: "url(../images/User/home-center-im.jpg) no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>

              <div className="text-div text-div-cent">
                <p className="p">
                  Create mobile apps, websites and other digital products that
                  connect with users in relevant and meaningful ways.
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
                        background: "url(../images/User/21x.webp) no-repeat",
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
                    DOWNLOAD BROCHURE&nbsp;
                    <lottie-player
                      class="download_broch_icon"
                      id="motion_dv"
                      src="/images/User/arrow_landingpage.json"
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
                  className="img "
                  src="/images/User/course-img-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="first_course_img">
                <div
                  style={{
                    background: "url(../images/User/course-imag-1.jpg) no-repeat",
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
                    background: "url(../images/User/course-imag-2.jpg) no-repeat",
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
                  <div className="all_full">
                    <div
                      style={{
                        background:
                          "url(../images/User/futuer-job-full-1.jpg) no-repeat",
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
                      UX / UI <br /> Designer
                    </p>
                  </div>
                  <div className="lower_half">
                    UI <br /> Developer
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    <div
                      style={{
                        background:
                          "url(../images/User/futuer-job-half-1.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                  <div className="lower_half"></div>
                </div>

                <div className="future_div">
                  <div className="upper_half">
                    UX <br /> Researcher
                  </div>
                  <div className="lower_half">
                    Product <br /> Designer
                  </div>
                </div>
                <div className="future_div">
                  <div className="all_full">
                    <div
                      style={{
                        background:
                          "url(../images/User/futuer-job-full-2.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="future_div">
                  <div className="upper_half">
                    Information <br /> Architect
                  </div>
                  <div className="lower_half"></div>
                </div>
                <div className="future_div last_future_div">
                  <div className="upper_half">
                    <div
                      style={{
                        background:
                          "url(../images/User/futuer-job-full-landscap.jpg) no-repeat",
                        backgroundSize: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </div>
                  <div className="lower_half">
                    Interaction <br /> Designer
                  </div>
                  <div className="lower_half"></div>
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
              UX / UI <br /> Designer
            </p>
          </div>
          <div className="lower_half">
            UX <br /> Researcher
          </div>
        </div>
        <div className="future_div">
          <div className="upper_half">
            UI <br /> Developer
          </div>
          <div className="lower_half">
            Product <br /> Designer
          </div>
        </div>
        <div className="future_div">
          <div className="all_full">
            <div
              style={{
                background: "url(../images/User/futuer-job-half-1.jpg) no-repeat",
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
                  "url(../images/User/futuer-job-full-landscap.jpg) no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="future_div last_future_div">
          <div className="upper_half">
            Interaction <br /> Designer
          </div>
          <div className="lower_half">
            Information <br /> Architect
          </div>
        </div>
      </section>
      <section className="course-structure-title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2">Course structure</h2>
              <p className="p">
                Create seamless user experiences by combining the knowledge of
                research, product development, strategy and design, to create
                mobile apps, websites, and other digital products.{" "}
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
                  <ul>
                    <li>Introductory session</li>
                    <li>Elements of Design</li>
                    <li>Colour & Composition</li>
                    <li>Design Process</li>
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
                  <h4 className="h4">Elements of UX</h4>
                  <ul>
                    <li>UX process</li>
                    <li>User needs</li>
                    <li>Business goals</li>
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
                  <h4 className="h4">Scope and Structure</h4>
                  <ul>
                    <li>Feature functionality</li>
                    <li>Information architecture</li>
                    <li>Interaction design</li>
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
                  <h4 className="h4">Skeleton and Surface</h4>
                  <ul>
                    <li>Navigation Design</li>
                    <li>Interface Design</li>
                    <li>Information Design</li>
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
                  <h4 className="h4">Design Sprint</h4>
                  <ul>
                    <li>User onboarding</li>
                    <li>Page types</li>
                    <li>Dashboard design</li>
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
                  <h4 className="h4">Design System Project</h4>
                  <ul>
                    <li>Content hub</li>
                    <li>Online store</li>
                    <li>Mobile app</li>
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
                    className="download_curri"
                  >
                    DOWNLOAD CURRICULUM
                    <lottie-player
                      class="download_broch_icon yellow"
                      id="motion_dv"
                      src="/images/User/arrow_landingpage-red.json"
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
              <h2 className="h2">Software & tools </h2>
            </div>
            <div className="col-md-3">
              <p className="p">
                Adobe XD
                <br />
                Figma
                <br />
                Sketch
                <br />
                Zeplin
              </p>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  background:
                    "url(../images/User/software-training.jpg) no-repeat",
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
                The programme is designed for people with a passion for learning
                to design functional and engaging products. If you have prior
                exposure in design, that’s even better.{" "}
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
              <a href="https://apply.andacademy.com/" target="_blank">
                <img
                  className="img tick_img"
                  height="44"
                  src="/images/User/tick_icon_black.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="eligiblity_img">
              <div
                className="cent_back_img"
                style={{
                  background: "url(../images/User/no-prior-img.jpg) no-repeat",
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
                        className="img tick_img"
                        height="44"
                        src="/images/Motion/tick_icon.svg"
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
                      src="/images/User/arrow_landingpage-yellow.json"
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
              <a href="/motion-graphics-animation-course"><a className="a anchor_whole">
                <span></span>
                <h6 className="h6">Intermediate Level </h6>
                <h5 className="h5">Motion Graphics Diploma</h5>
                <p className="p">
                  Bring new life to static images with a course in motion
                  graphics using animation and visual effects.
                  <img
                    className="img tick_img"
                    height="44"
                    src="/images/User/tick_icon.svg"
                    alt=""
                  />
                </p>
              </a></a>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/User/motion_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/User/graphic_below_box.webp) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></div>
            </div>
            <div className="col-md-8 yellow_div">
              <a href="/graphic-design-course"><a className="a anchor_whole">
                <h6 className="h6">Beginner Level </h6>
                <h5 className="h5">Graphic Design Diploma</h5>
                <p className="p">
                  Master the fundamentals of graphic design, from colour
                  theory, composition and typography to creative applications
                  and design processes.
                  <img
                    className="img tick_img"
                    height="44"
                    src="/images/User/tick_icon_red.svg"
                    alt=""
                  />
                </p>
              </a></a>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-brand-sec black_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <a href="/digital-brand-communication-course"><a className="a anchor_whole">
                <h6 className="h6">Intermediate Level </h6>
                <h5 className="h5">Digital Brand Communication Diploma</h5>
                <p className="p">
                  Learn to ideate, design, and promote your brand messaging
                  through visual communication across various digital
                  platforms.
                  <img
                    className="img tick_img"
                    height="44"
                    src="/images/User/tick_icon_red.svg"
                    alt=""
                  />
                </p>
              </a></a>
            </div>
            <div className="col-md-4">
              <div
                className="cent_back_img"
                style={{
                  background:
                    "url(../images/User/digital_below_box.webp) no-repeat",
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
                    "url(../images/User/interior_below_box.jpg) no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="col-md-8 blue_div">
              <a href="/interior-design-course"><a className="a anchor_whole">
                <h6 className="h6">beginner Level </h6>
                <h5 className="h5">Interior Design Diploma</h5>
                <p className="p">
                  Design and build functionally aesthetic residential and
                  commercial spaces.
                  <img
                    className="img tick_img"
                    height="44"
                    src="/images/User/tick_icon_black.svg"
                    alt=""
                  />
                </p>
              </a></a>
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
export default User;
