import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header.js";
import MainFrame from "./MainFrame.js";
import UpSkill from "./UpSkill.js";
import About from "./About.js";
import WhyEnd from "./WhyEnd.js";
import Courses from "./Courses.js";
import NotSure from "./NotSure.js";
import HowWeTeach from "./HowWeTeach.js";
import CareerSupport from "./CareerSupport.js";
import MeettheMentors from "./MeettheMentors.js";
import AdmissionProcess from "./AdmissionProcess.js";
import StartNow from "./StartNow.js";
import FAQ from "./FAQ.js";
import SayHi from "./SayHi.js";
import Footer from "./Footer.js";
import { Helmet } from "react-helmet";
import ModalPopup from "./ModalPopup.js";
import ScriptTag from "react-script-tag";
import $ from "jquery";
import AOS from "aos";

function Home(props) {
  if (typeof window !== "undefined") {
    AOS.init();
  }

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const Background = "/images/logo-vertical.svg";
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.0/dist/aos.css"
        />
        <link
          rel="stylesheet"
          href="css/MainStyles.css"
        />
        <meta
          name="description"
          content="No. 1 Design School for upskilling and career advancement. Learn Graphic Design, Interior Design, UX/UI Design, Motion Graphics and much more. Explore our online courses "
        />
        <meta
          name="keywords"
          content="design course, design courses, designing courses in India, online design courses, design courses online, designing courses in India, AND Academy"
        />
        <title>AND Academy | Transform your Career with Design</title>
      </Helmet>
      
        <>
          <MainFrame></MainFrame>
          <Header data={props.showmodal}></Header>
          <UpSkill></UpSkill>
          <About></About>
          <WhyEnd></WhyEnd>
          <Courses></Courses>
          <NotSure data={props.showmodal}></NotSure>
          <HowWeTeach></HowWeTeach>
          <CareerSupport></CareerSupport>
          <MeettheMentors></MeettheMentors>
          <AdmissionProcess></AdmissionProcess>
          <StartNow></StartNow>
          <FAQ></FAQ>
          <SayHi></SayHi>
          <Footer></Footer>
          <ModalPopup data={props.data}></ModalPopup>
        </>
      
    </>
  );
}
export default Home;
