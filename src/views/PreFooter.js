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
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Prefooter() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [emailFocus2, setEmailFocus2] = React.useState(false);
  return (
    <>
      <div className="section section-pre-footer">
        <div id="pre-footer-areas">
          <Container>
            <div className="title">
              <h1>Partners & Sponsors</h1>
            </div>
          </Container>
          <br />
          <br />
          <div className="social-line social-line-big-icons">
            <Container>
              <Row>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="https://derive.fi/"
                    target="_blank"
                  >
                    <img
                      src={require("assets/img/derive-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                      alt="Derive Finance"
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/oikos-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/oikos-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/oikos-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/oikos-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                    />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/oikos-type.svg").default}
                      style={{
                        maxWidth:"8vh"
                      }} 
                    />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
