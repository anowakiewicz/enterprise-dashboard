import React from "react";

import Wrapper from "./Wrapper";
import Row from "./Row";
import Column from "./Column";
import InfoBox from "../../components/InfoBox";
import ProductionBox from "../../components/ProductionBox";
import WorldMap from "../../components/WorldMap";
import Summary from "../../components/Summary";

export const Dashboard = (props) => {
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
};

export default Dashboard;
