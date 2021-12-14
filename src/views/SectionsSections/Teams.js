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
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/manuel_corona.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Manuel Corona</CardTitle>
                    <h6 className="category text-info">Co-Founder & Marketing Expert</h6>
                    <p className="card-description">
                      Manuel had an early fascination with technology that led him to work with many talented people and co-found several technology projects. He is a skilled marketer, IT expert and his interests span from programming to distributed system design and of course, cryptocurrencies. His early vision for Oikos was determinant and he led the project from the idea phase to deployment.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/albert_rodriguez.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Albert Rodriguez</CardTitle>
                    <h6 className="category text-info">Co-Founder & Mad Scientist</h6>
                    <p className="card-description">
                      Albert is an early Bitcoin, Ethereum and Binance Smart Chain adopter. His fascination for DeFi lead him to come up with the idea for Oikos and everything started from there. He is also a very talented developer with experience in several programming languages. His daily routine consists in drinking a lot of coffee, writing code and thinking of new possible directions for Oikos.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile profile-bg">
                  <CardHeader
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #3c3c3c, #1a1a1a",
                    }}
                  >
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/kevin_holder.jpg").default}
                        />
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h3">Kevin Holder</CardTitle>
                    <h6 className="category text-info">Software Engineer</h6>
                    <p className="card-description">
                    Kevin is a talented software engineer that has been through the whole technology stack during the course of his career, from cryptography to front end web development. Before Oikos, he spent his time developing smart contracts, studying decentralized applications and contributing to open source. His programming languages of choice are, in no particular order, Solidity, JavaScript and Rust.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>{" "}
    </>
  );
}
