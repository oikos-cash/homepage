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
          <UncontrolledAlert className="alert btn-info" color="info">
            <span>
              <h2 className="mt-3"><b>Oikos has migrated to Binance Smart Chain on 02/02/21.</b></h2>
              <h3>Checkout the new statistics website at <a href="https://stats.oikos.cash/" target="_blank" style={{color:"lightgreen",}}>stats.oikos.cash</a>.</h3>
            </span>
          </UncontrolledAlert>
        </Container>
      </div>
    </>
  );
}
