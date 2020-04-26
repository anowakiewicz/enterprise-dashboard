import React from "react";
// import PropTypes from 'prop-types';

import H2 from "../../common-components/H2";
import Button from "../../common-components/Button";
import ComponentWrapper from "../../containers/ComponentWrapper";
import Row from "./Row";
import Icon from "./Icon";
import ButtonsWrap from "./ButtonsWrap";

const ProductionBox = () => {
  return (
    <ComponentWrapper height="450px" marginBottom="10px">
      <Row>
        <H2>Production</H2>
        <Icon />
      </Row>
      <Row>chart</Row>
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
