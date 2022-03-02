import React from "react";
import Footer from "components/Footer.js";
import ColorNavbar from "components/ColorNavbar.js";
import HeaderTerms from "./views/HeaderTerms.js";
import Notifications from "./views/Notifications.js";
import TermsAndConditions from "./views/Terms.js";

export default function Terms() {
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
        <div className="section-space mt-5" />
        <TermsAndConditions />
        <Footer />
      </div>
    </>
  );
}
