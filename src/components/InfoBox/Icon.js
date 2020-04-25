import React from "react";
import styled from "styled-components";

import { DynamicFeed, Person, BarChart, MoreHoriz } from "@material-ui/icons";

const IconWrap = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlueIconWrap = styled(IconWrap)`
  background-color: #2abfd8;
`;

const GreenIconWrap = styled(IconWrap)`
  background-color: #bdd64b;
`;

const OrangeIconWrap = styled(IconWrap)`
  background-color: #ff9933;
`;

const RedIconWrap = styled(IconWrap)`
  background-color: #fc5151;
`;

const Icon = ({ name }) => {
  const renderIcon = (name) => {
    switch (name) {
      case "profit":
        return (
          <BlueIconWrap>
            <DynamicFeed style={{ color: "#fff" }} />
          </BlueIconWrap>
        );
      case "user":
        return (
          <GreenIconWrap>
            <Person style={{ color: "#fff" }} />
          </GreenIconWrap>
        );
      case "orders":
        return (
          <OrangeIconWrap>
            <BarChart style={{ color: "#fff" }} />
          </OrangeIconWrap>
        );
      case "complaints":
        return (
          <RedIconWrap>
            <MoreHoriz style={{ color: "#fff" }} />
          </RedIconWrap>
        );
      default:
        return null;
    }
  };

  return renderIcon(name);
};

export default Icon;
