import React from "react";

import H2 from "../../common-components/H2";
import ComponentWrapper from "../../containers/ComponentWrapper";
import Row from "./Row";

import Chart from "./Chart";

const ChartBox = () => {
  return (
    <ComponentWrapper height="420px" marginBottom="10px">
      <Row>
        <H2>Chart</H2>
      </Row>
      <Row center>
        <Chart />
      </Row>
    </ComponentWrapper>
  );
};

export default ChartBox;
