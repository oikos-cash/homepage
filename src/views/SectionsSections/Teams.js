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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
} from "reactstrap";

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Charlie Watson</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/charlie.jpg").default}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Artist <br />
                <strong>Experience:</strong> 5 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Quavo Austen</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg").default}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> Actor <br />
                <strong>Experience:</strong> 1 year
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">Manuel</h1>
          </Col>
          <Col md="4">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg").default}
            />
          </Col>
          <Col md="4">
            <div className="wrapper">
              <div className="category">
                <strong>Position:</strong> CEO <br />
                <strong>Experience:</strong> 7 years
              </div>
              <div className="description">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person who expresses him- or herself through a medium". He
                is a descriptive term applied to a person who engages in an
                activity deemed to be an art. An artist also may be defined
                unofficially as "a person who expresses him- or herself through
                a medium".
              </div>
              <div className="footer">
                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2",
  },
];

export default function Teams() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="cd-section" id="teams">
        <div className="team-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Team</h2>
                <h4 className="description">
                Blockchain engineers, mad scientists and marketing ninjas. <a href="#">We're hiring!</a>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/ben-konfrst.jpg").default +
                        ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/ryan.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Manuel Corona</CardTitle>
                    <h6 className="category text-primary">Co-Founder & Marketing Expert</h6>
                    <p className="card-description">
                      Multi-Cloud Object Storage and Data Mobility: A GigaOm
                      Market Landscape Report has been announced...
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="follow float-left">
                      <Button
                        className="btn-simple"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        <i className="tim-icons icon-check-2 mr-1" />
                        Following
                      </Button>
                    </div>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="behance"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-behance" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/ruvim-noga.jpg").default +
                        ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/lora.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Albert Rodriguez</CardTitle>
                    <h6 className="category text-primary">Co-Founder & Mad Scientist</h6>
                    <p className="card-description">
                      Over the years, advancement in CRM technology has reshaped
                      the way SMBs and SMEs manage their workflows...
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="follow float-left">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Follow
                      </Button>
                    </div>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="behance"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-behance" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/sendra-martorell.jpg").default +
                        ")",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/ryan.png").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Kevin Holder</CardTitle>
                    <h6 className="category text-primary">Software Engineer</h6>
                    <p className="card-description">
                      Scaling DevOps: Strategy &amp; Technical Considerations
                      for Successful Enterprise DevOps
                    </p>
                  </CardBody>
                  <CardFooter>
                    <div className="follow float-left">
                      <Button
                        className="btn-simple"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        <i className="tim-icons icon-check-2 mr-1" />
                        Following
                      </Button>
                    </div>
                    <div className="d-inline float-right d-md-block">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="linkedin"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="behance"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-behance" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
