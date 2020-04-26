import React from "react";
import styled from "styled-components";

import { DynamicFeed, Person, BarChart, MoreHoriz } from "@material-ui/icons";
import Colors from "../../consts/Colors";

const { blue, green, orange, red } = Colors;

const IconWrap = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlueIconWrap = styled(IconWrap)`
  background-color: ${blue};
`;

const GreenIconWrap = styled(IconWrap)`
  background-color: ${green};
`;

const OrangeIconWrap = styled(IconWrap)`
  background-color: ${orange};
`;

const RedIconWrap = styled(IconWrap)`
  background-color: ${red};
`;

const Icon = ({ name }) => {
  const renderIcon = (name) => {
    switch (name) {
      case "search":
        return (
          <BlueIconWrap>
            <Person style={{ color: "#fff" }} />
          </BlueIconWrap>
        );
      case "repos":
        return (
          <GreenIconWrap>
            <DynamicFeed style={{ color: "#fff" }} />
          </GreenIconWrap>
        );
      case "followers":
        return (
          <OrangeIconWrap>
            <BarChart style={{ color: "#fff" }} />
          </OrangeIconWrap>
        );
      case "subscriptions":
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
