import React from "react";

import Wrapper from "./Wrapper";
import Row from "./Row";
import Column from "./Column";
import InfoBox from "../../components/InfoBox";
import ProductionBox from "../../components/ProductionBox";

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
        </Column>
        <Column></Column>
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
