import React, { Component } from "react";
import { observer } from "mobx-react";
// import { computed } from "mobx";

import Wrapper from "./Wrapper";
import Row from "./Row";
import Column from "./Column";
import InfoBox from "../../components/InfoBox";
import ProductionBox from "../../components/ProductionBox";
import WorldMap from "../../components/WorldMap";
import Summary from "../../components/Summary";

@observer
class Dashboard extends Component {
  // @computed
  // // get user

  render() {
    return (
      <Wrapper>
        <Row>
          <InfoBox name="profit" />
          <InfoBox name="user" />
          <InfoBox name="orders" />
          <InfoBox name="complaints" />
        </Row>
        <Row>
          <Column>
            <ProductionBox />
            <Summary />
          </Column>
          <Column>
            <WorldMap />
          </Column>
        </Row>
      </Wrapper>
    );
  }
}

export default Dashboard;
