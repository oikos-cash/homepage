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
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
let slickHeader2Settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  className: "customer-logos",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// custom previous button for the slick component
const PrevButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

export default function Headers() {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "linear-gradient(-60deg, #1a3c43, #2c0a2c",
              }}
            />
            <Container>
              <Row>
                <Col className="mr-auto text-left mt-5" lg="5" md="7">
                  <h6 className="category">Decentralized Finance on Binance Smart Chain</h6>
                  <h1 className="title">
                  Oikos is an initiative to bring key DeFi dApps to BSC
                  </h1>
                  <br />
                  <div className="buttons">
                    <Button
                    className="btn-round"
                    color="info"
                    href="https://nucleoapp.com/?ref=1712"
                    size="lg"
                    target="_blank"
                  >
                    Buy OKS
                  </Button>
                    <Button
                      className="btn-round mr-3"
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <p>Enter DaPP</p>
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mt-5" lg="7" md="12">
                  <div className="iframe-container">
                    <img
                      alt="..."
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard/black-dashboard.gif"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
