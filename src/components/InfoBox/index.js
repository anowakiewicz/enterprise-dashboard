import React from "react";

import H3 from "../../common-components/H3";
import Number from "../../common-components/Number";
import Select from "../../common-components/Select";
import SelectOption from "../../common-components/SelectOption";
import InnerWrapper from "./InnerWrapper";
import InfoBoxContainer from "./InfoBoxContainer";
import MonthlyStats from "./MonthlyStats";
import Icon from "./Icon";

export const InfoBox = ({ name }) => {
  return (
    <InfoBoxContainer>
      <InnerWrapper>
        <Number>123123123</Number>
        <H3>Total profit</H3>
      </InnerWrapper>
      <MonthlyStats>
        <Select>
          <SelectOption option={{ label: "test label" }} />
        </Select>
        <Icon name={name} />
      </MonthlyStats>
    </InfoBoxContainer>
  );
};

export default InfoBox;
