import React, { Component } from "react";
import Link from "next/link";

export class FooterInner extends Component {
  render() {
    return (
      <>
        <footer className="Footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h5 className="h5">MEET US AT</h5>
                <p className="p">
                  IIAD Campus,
                  <br className="br" /> B-26, Okhla Phase-1,
                  <br className="br" /> New Delhi 110020{" "}
                </p>
              </div>
              <div className="col-md-4">
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
                    <img src="./images/facebook.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/linkedin.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/instagram.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/youtube.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="col-md-4">
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
                    <img src="./images/facebook.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/linkedin.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/instagram.svg" alt="" />
                  </a>
                  <a className="a" href="#">
                    <img src="./images/youtube.svg" alt="" />
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="">
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
              </div>
              <div className="col-md-4">
                <div className="">
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
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="copyright row">
              <div className="col-md-12">
                <p className="p">
                  Copyright 2022 AND Academy | All Rights Reserved
                </p>
                <a
                  className="a termsAnchor"
                  href="pdf/Application_Portal_Term_&amp;_Condition.pdf"
                  target="_blank"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default FooterInner;
