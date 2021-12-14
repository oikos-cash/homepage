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
              <h3>Partners & Sponsors</h3>
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
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-google-plus" />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-youtube" />
                  </Button>
                </Col>
                <Col md="2">
                  <Button
                    className="btn-simple btn-icon btn-footer"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
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
