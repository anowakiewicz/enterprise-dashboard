import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { computed } from "mobx";
import PropTypes from "prop-types";

import Wrapper from "./Wrapper";
import Row from "./Row";
import Column from "./Column";
import Overlay from "./Overlay";
import InfoBox from "../../components/InfoBox";
import ChartBox from "../../components/ChartBox";
import WorldMap from "../../components/WorldMap";
import Summary from "../../components/Summary";

import Spinner from "./Spinner";

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
        <Overlay active={this.props.userDataStore.fetchingData ? 1 : 0}>
          <Spinner />
        </Overlay>
      </Wrapper>
    );
  }
}

export default Dashboard;
