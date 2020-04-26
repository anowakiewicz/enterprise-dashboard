import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { computed } from "mobx";
import PropTypes from "prop-types";

import Wrapper from "./Wrapper";
import Row from "./Row";
import Column from "./Column";
import InfoBox from "../../components/InfoBox";
import ChartBox from "../../components/ChartBox";
import WorldMap from "../../components/WorldMap";
import Summary from "../../components/Summary";

@inject("userDataStore")
@observer
class Dashboard extends Component {
  static propTypes = {
    userDataStore: PropTypes.object,
  };

  @computed
  get infoBoxes() {
    const { userInfo } = this.props.userDataStore;
    return userInfo.map((info, idx) => (
      <InfoBox key={`info-box-${idx}`} data={info} />
    ));
  }

  render() {
    return (
      <Wrapper>
        <Row>{this.infoBoxes}</Row>
        <Row>
          <Column>
            <ChartBox />
            <Summary />
          </Column>
          <Column>
            <WorldMap />
          </Column>
        </Row>
      </Wrapper>
    );
  }
}

export default Dashboard;
