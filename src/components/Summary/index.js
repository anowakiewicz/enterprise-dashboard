import React, { Component } from "react";

import H2 from "../../common-components/H2";
import ComponentWrapper from "../../containers/ComponentWrapper";
import RecentRepos from "./RecentRepos";

class Summary extends Component {
  render() {
    return (
      <ComponentWrapper height="180px">
        <H2>Recent repos:</H2>
        <RecentRepos />
      </ComponentWrapper>
    );
  }
}

export default Summary;
