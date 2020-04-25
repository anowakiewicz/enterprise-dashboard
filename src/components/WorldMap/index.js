import React, { Component } from "react";

import ComponentWrapper from "../../containers/ComponentWrapper";
import H2 from "../../common-components/H2";
import Map from "./Map.js";

class WorldMap extends Component {
  render() {
    return (
      <ComponentWrapper height="650px">
        <H2>Sales revenue by country</H2>
        <Map />
      </ComponentWrapper>
    );
  }
}

export default WorldMap;
