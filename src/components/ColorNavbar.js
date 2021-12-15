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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("navbar-transparent");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <img
                src={require("assets/img/oikos-type.svg").default}
                style={{
                  maxHeight:"4vh",
                }}
                className="mr-1"
              />
              • DeFi on BSC
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <img
                    src={require("assets/img/oikos-type.svg").default}
                    style={{
                      maxHeight:"4vh",
                    }}
                    className="mr-1"
                  />
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <a 
                href="#"
                className="nav-link text-white"
                target="_blank"
              >
                Home
              </a>
              <a 
                href="https://stats.oikos.cash/"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Stats
              </a>
              <a 
                href="https://dashboard.oikos.cash/"
                className="nav-link text-white ml-3"
                target="_blank"
              >
                Dashboard
              </a>
              <NavItem>
                <Button
                  className="nav-link ml-3"
                  color="info"
                  href="https://oikos.exchange"
                  size="sm"
                  target="_blank"
                >
                  <p>Minter</p>
                </Button>
                <Button
                  className="nav-link ml-3"
                  color="default"
                  href="https://oikos.exchange"
                  size="sm"
                  target="_blank"
                >
                  <p>Exchange</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
