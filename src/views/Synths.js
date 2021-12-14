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
import { Button, Container, Row, Col } from "reactstrap";

export default function Synths() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Synthetic Assets</h2>
              {/* <h4 className="description">
                BLK• Design System PRO React comes with 100 custom icons made by
                our friends from NucleoApp.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/icons?ref=blkdspr-index"
                  target="_blank"
                >
                  Buy OKS
                </Button>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://nucleoapp.com/?ref=1712"
                  size="lg"
                  target="_blank"
                >
                  View Pools
                </Button>
              </div> */}
            </Col>
          </Row>
          <div className="">
            <a href="https://oikos.exchange/">
              <div className="icons-container on-screen mt-5">
                {/* Center */}
                <i className="icon tim-icons icon-coins" />
                {/* <img
                  src={require("assets/img/oBNB.png").default}
                  className="icon tim-icons icon-coins"
                  style={{
                    maxWidth:"75px",
                  }}
                /> */}
                {/* Right 1 */}
                <i className="icon icon-sm tim-icons icon-spaceship" />
                <i className="icon icon-sm tim-icons icon-money-coins" />
                <i className="icon icon-sm tim-icons icon-link-72" />
                {/* Right 2 */}
                <i className="icon tim-icons icon-send" />
                <i className="icon tim-icons icon-mobile" />
                <i className="icon tim-icons icon-wifi" />
                {/* Left 1 */}
                <i className="icon icon-sm tim-icons icon-key-25" />
                <i className="icon icon-sm tim-icons icon-atom" />
                <i className="icon icon-sm tim-icons icon-satisfied" />
                {/* Left 2 */}
                <i className="icon tim-icons icon-gift-2" />
                <i className="icon tim-icons icon-tap-02" />
                <i className="icon tim-icons icon-wallet-43" />
              </div>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
