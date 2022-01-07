/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import Footer from "components/Footer.js";
import ColorNavbar from "components/ColorNavbar.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Header from "./Header.js";
import Notifications from "./Notifications.js";
import Content from "./Content.js";
import Highlights from "./Highlights.js";
import Team from "./Team.js";
import Tools from "./Tools.js";
import FAQ from "./FAQ.js";
import Synths from "./Synths.js";
import PreFooter from "./PreFooter.js";
import Subscribe from "./Subscribe.js";

// CSS
import "assets/css/styles.css"

export default function Sections() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="section-space" />
        <Header />
        <Notifications />
        <Content />
        <Highlights />
        <Synths />
        <Tools />
        <Team />
        <PreFooter />
        <FAQ />
        {/* <Subscribe /> */}
        <Footer />
      </div>
    </>
  );
}
