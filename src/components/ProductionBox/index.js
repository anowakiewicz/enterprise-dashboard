import React from "react";
// import PropTypes from 'prop-types';

import H2 from "../../common-components/H2";
import Button from "../../common-components/Button";
import ComponentWrapper from "../../containers/ComponentWrapper";
import Row from "./Row";
import Icon from "./Icon";
import ButtonsWrap from "./ButtonsWrap";

import Chart from "./Chart";

const ProductionBox = () => {
  return (
    <ComponentWrapper height="300px" marginBottom="10px">
      <Row>
        <H2>Chart</H2>
        <Icon />
      </Row>
      <Row center>
        <Chart />
      </Row>
      <Row>
        <ButtonsWrap>
          <Button>Export</Button>
          <Button>Print</Button>
        </ButtonsWrap>
      </Row>
    </ComponentWrapper>
  );
};

// ProductionBox.propTypes = {

// };

export default ProductionBox;
