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
import { UncontrolledAlert, Container } from "reactstrap";

export default function Notifications() {
  return (
    <>
      <div className="section section-notifications" id="notifications">
        <Container>
          <div className="space" />
          <UncontrolledAlert className="alert" color="alert">
            <span>
              <h1><b>Oikos is migrating to Binance Smart Chain.</b></h1>
              <h2>Checkout the new statistics website at <a href="https://stats.oikos.cash/" target="_blank">stats.oikos.cash</a>.</h2>
            </span>
          </UncontrolledAlert>
        </Container>
      </div>
    </>
  );
}
