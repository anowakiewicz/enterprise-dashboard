import React, { Component } from "react";
import autobind from "autobind-decorator";
import ReactTooltip from "react-tooltip";

import ComponentWrapper from "../../containers/ComponentWrapper";
import H2 from "../../common-components/H2";
import Map from "./Map.js";

class WorldMap extends Component {
  state = {
    content: "",
  };

  @autobind
  setContent(tooltipContent) {
    this.setState({ content: tooltipContent });
  }

  render() {
    return (
      <ComponentWrapper height="612px">
        <H2>User's location</H2>
        <Map setTooltipContent={this.setContent} />
        <ReactTooltip>{this.state.content}</ReactTooltip>
      </ComponentWrapper>
    );
  }
}

export default WorldMap;
