import React from "react";

import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Headers() {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(-60deg, #1a3c43, #2c0a2c",
              // }}
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
                      href="https://pancakeswap.finance/swap/0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a?inputCurrency=BNB"
                      size="lg"
                      target="_blank"
                    >
                      Buy OKS
                    </Button>
                    <Button
                      className="btn-round mr-3"
                      href="https://minter.oikos.cash/"
                      size="lg"
                      target="_blank"
                    >
                      <p>Enter DaPP</p>
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mt-5" lg="7" md="12">
                  <div className="iframe-container">
                    <img
                      alt="..."
                      src={require("assets/img/header-video.gif").default}
                      style={{
                        marginTop:"-2.5vh",
                      }}
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
