import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { computed, action } from "mobx";
import PropTypes from "prop-types";

import H2 from "../../common-components/H2";
import H3 from "../../common-components/H3";
import Select from "../../common-components/Select";
import SelectOption from "../../common-components/SelectOption";
import Header from "./Header";
import InnerWrapper from "./InnerWrapper";
import InfoBoxContainer from "./InfoBoxContainer";
import GreyBar from "./GreyBar";
import Icon from "./Icon";

@inject("userDataStore")
@observer
class InfoBox extends Component {
  static propTypes = {
    data: PropTypes.object,
    changeUser: PropTypes.func,
    userDataStore: PropTypes.object,
  };

  @action.bound
  handleOnSelectChange(e) {
    this.props.userDataStore.changeUserToSearchFor(e.target.value);
  }

  @computed
  get selectUser() {
    const { data } = this.props;
    if (data.type !== "search") return null;

    return (
      <Select onChange={this.handleOnSelectChange}>
        <SelectOption {...data.result} />
      </Select>
    );
  }

  render() {
    const { data } = this.props;
    const name = data.name ? <H2 large>{data.name.login}</H2> : null;

    return (
      <InfoBoxContainer className>
        <InnerWrapper>
          <H3>{data.title}</H3>
          {name}
          <Header {...data} />
        </InnerWrapper>
        <GreyBar>
          {this.selectUser}
          <Icon name={data.type} />
        </GreyBar>
      </InfoBoxContainer>
    );
  }
}

export default InfoBox;
