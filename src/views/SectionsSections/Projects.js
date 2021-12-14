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
  Badge,
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
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Projects() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        {/* ********* PROJECTS 4 ********* */}
        <div className="projects-4">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h6 className="category text-muted">Oikos Network</h6>
                <h2 className="title mt-0">Tools</h2>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg8.jpg").default + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-atom" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Minter</CardTitle>
                    </a>
                    <h6 className="desc">Java App</h6>
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg7.jpg").default + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-camera-18" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Exchange</CardTitle>
                    </a>
                    <h6 className="desc">College project</h6>
                    <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg4.jpg").default + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-html5" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Stats</CardTitle>
                    </a>
                    <h6 className="desc">HTML code</h6>
                    <Button
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg8.jpg").default + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-html5" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">xyz</CardTitle>
                    </a>
                    <h6 className="desc">HTML code</h6>
                    <Button
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 4 ********* */}
      </div>{" "}
    </>
  );
}
