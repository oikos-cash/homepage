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
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function FAQ() {
  const [collapse, setCollapse] = React.useState(1);
  const openCollapse = (collapse) => {
    setCollapse(collapse);
  };

  return (
    <>
      <div className="cd-section" id="accordion">
        <div className="accordion-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title mb-4 mt-5">Frequently asked question</h2>
                <div className="section-space" />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <div className="accordion">
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 2}
                          onClick={() => openCollapse(2)}
                        >
                          What is Oikos?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 2}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 3}
                          onClick={() => openCollapse(3)}
                        >
                          What is a financial derivative?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 3}>
                      <CardBody>
                        The term derivative refers to a type of financial contract whose value is dependent on an underlying asset, group of assets, or benchmark. Prices for derivatives derive from fluctuations in the underlying asset.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 4}
                          onClick={() => openCollapse(4)}
                        >
                          What are synthetic assets?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 4}>
                      <CardBody>
                        Synthetic assets, sometimes referred to as synths, are a combination of cryptocurrencies and traditional derivative assets. In other words, synths are tokenized derivatives. ... With this popularity, new forms of assets emerge, which cater to the needs of a wider group of users. Among these new assets are synthetic assets.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 5}
                          onClick={() => openCollapse(5)}
                        >
                          How do synthetic assets differ from traditional derivatives?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 5}>
                      <CardBody>
                        Instead of using contracts to create the chain between an underlying asset, the derivative product, synthetic assets tokenize the relationship. This means that synthetic assets can impart exposure to any asset in the world — all from within the crypto ecosystem.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 1}
                          onClick={() => openCollapse(1)}
                        >
                          What are the advantages of crypto synthetic assets vs. traditional derivatives?{" "}
                          <i className="oikos-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 1}>
                      <CardBody>
                      Traditional derivatives were once groundbreaking in their ability to unlock additional value from assets such as commodities. However, crypto synthetic assets are taking liquidity access to a whole new level. Here are just a few advantages synthetic assets have over traditional derivatives:
                        -Anyone can issue them: Blockchain-based synthetic assets can be minted by anyone using open-source protocols like Synthetix and Mirror.
                        -Worldwide liquidity: Synthetics can be traded on any crypto exchange in the world, including unstoppable decentralized exchanges.
                        -Borderless transfers: Synthetic assets are blockchain assets like ERC-20 tokens; you can send and receive them between standard cryptocurrency wallets.
                        -Frictionless movement: Switch between equities, synthetic silver/gold, and other assets without having to hold the underlying asset.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
