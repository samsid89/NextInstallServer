
import React, { useState, useEffect, useLocation } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import { Provider } from "../components/Context";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/scss/new_section_inner.scss";
import "../styles/scss/popup.scss";
import "../styles/index.css";

NProgress.configure({
  easing: "ease",
  speed: 500,
});
let timeOut;

if (typeof window !== "undefined") {
  if (window.location.pathname === "/") {
    
  } else if (
    window.location.pathname.includes("communication-design-pg-diploma")
  ) {
    
  } else if (
    window.location.pathname.includes("digital-brand-communication-course")
  ) {
    
  } else if (window.location.pathname.includes("graphic-design-course")) {
    
  } else if (window.location.pathname.includes("interior-design-course")) {
    
  } else if (
    window.location.pathname.includes("motion-graphics-animation-course")
  ) {
    
  } else if (window.location.pathname.includes("user-experience-design-course")) {
    
  } else {
    
  }
}

var $;
$ = require("jquery");

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  function openModal(val) {
    setShow(val);
  }

  const router = useRouter()


  const handleShow = true;

  const tagManagerArgs = {
    gtmId: "GTM-W4VHW7X",
  };

  const [initialized, setInitialized] = useState(false);


  useEffect(() => {

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeStart", (url) => {
      console.log(`Loading: ${url}`);
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        console.log("Secure Connection Request");
        window.location.href = url;
      }, 3000);
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      clearTimeout(timeOut);
      handleRouteChange;
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
      clearTimeout(timeOut);
    });
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    ReactGA.initialize("UA-215973243-1");

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const contextValue = {
    data: show,
    handlecheck: openModal,
  };

  return (
    <Provider value={contextValue}>
      <Head>
        
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="bVxKIYCUplLGccRoAFuvMh6gT_pLltDx-Xl-jJ3umME"
        />
        <meta property="og:site_name" content="AND Academy" />
      <meta property="og:title" content="AND Academy | Transform your Career with Design" />
      <meta property="og:description" content="No. 1 Design School for upskilling and career advancement. Learn Graphic Design, Interior Design, UX/UI Design, Motion Graphics and much more. Explore our online courses " />
      <meta property="og:image"  content="https://www.andacademy.com/images/logo-site.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content="1440432930" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <Component {...contextValue} />
    </Provider>
  );
}

export default MyApp;
