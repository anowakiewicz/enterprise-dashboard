import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { computed, toJS } from "mobx";
import PropTypes from "prop-types";

import List from "./List";
import ListItem from "./ListItem";
import Link from "./Link";
import { FilterDrama } from "@material-ui/icons";

@inject("userDataStore")
@observer
class RecentRepos extends Component {
  static propTypes = {
    userDataStore: PropTypes.object,
  };

  @computed
  get repos() {
    const repos = this.props.userDataStore.repos;

    return toJS(repos)
      .map((repo, idx) => (
        <ListItem key={`repo-${idx}`}>
          {repo.name}
          <Link href={repo.html_url} target="_blank" rel="noopener norefferer">
            <FilterDrama />
          </Link>
        </ListItem>
      ))
      .slice(0, 4);
  }

  render() {
    return <List>{this.repos}</List>;
  }
}

export default RecentRepos;
