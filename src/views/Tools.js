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
} from "reactstrap";

export default function Tools() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-4">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h2 className="category text-muted">Oikos Network</h2>
                <h1 className="title mt-0">Tools</h1>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a)",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://minter.oikos.cash/" target="_blank">
                      <CardTitle tag="h2">Minter</CardTitle>
                    </a>
                    <h6 className="desc">dApp</h6>
                    <Button
                      color="info"
                      href="https://minter.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a)",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://oikos.exchange" target="_blank">
                      <CardTitle tag="h2">Exchange</CardTitle>
                    </a>
                    <h6 className="desc">Dapp</h6>
                    <Button
                      color="info"
                      href="https://oikos.exchange/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a)",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://stats.oikos.cash/" target="_blank">
                      <CardTitle tag="h2">Stats</CardTitle>
                    </a>
                    <h6 className="desc">Analytics</h6>
                    <Button
                      color="info"
                      href="https://stats.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3c3c3c, #1a1a1a)",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                    </h6>
                    <a href="https://dashboard.oikos.cash/" target="_blank">
                      <CardTitle tag="h2">Dashboard</CardTitle>
                    </a>
                    <h6 className="desc">Distribution</h6>
                    <Button
                      color="info"
                      href="https://dashboard.oikos.cash/"
                      target="_blank"
                    >
                      Visit
                    </Button>
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
