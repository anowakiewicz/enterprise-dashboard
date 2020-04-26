import { observable, action, runInAction, reaction, computed } from "mobx";
import axios from "axios";

class UserDataStore {
  @observable searchName;
  @observable searchResults = [];
  @observable user = null;
  @observable repos = [];
  @observable followers = [];
  @observable subscriptions = [];
  @observable fetchingData;

  constructor(rootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.searchName,
      () => this.searchForUser()
    );
  }

  async fetchUserFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}?client_id=my_client_id&client_secret=my_client_secret_id`;
    const response = await axios.get(url, { crossDomain: true });
    return await response.data;
  }

  async searchGithubForUsers(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await axios.get(url, { crossDomain: true });
    return await response.data;
  }

  @action("Change User to search for")
  changeUserToSearchFor(username) {
    this.searchName = username;
  }

  @action("Search for user on Github")
  searchForUser = async () => {
    if (!this.searchName) return;
    this.fetchingData = true;

    const [
      user,
      repos,
      followers,
      subscriptions,
      searchResults,
    ] = await Promise.all([
      this.fetchUserFromGithub(`/users/${this.searchName}`),
      this.fetchUserFromGithub(`/users/${this.searchName}/repos`),
      this.fetchUserFromGithub(`/users/${this.searchName}/followers`),
      this.fetchUserFromGithub(`/users/${this.searchName}/subscriptions`),
      this.searchGithubForUsers(`/search/users?q=${this.searchName}`),
    ]);

    runInAction("Update State after fetching Github's Data", () => {
      this.user = user;
      this.repos = repos;
      this.followers = followers;
      this.subscriptions = subscriptions;
      this.searchResults = searchResults;
      this.fetchingData = false;
    });
  };

  @computed
  get userInfo() {
    return [
      {
        title: "User's name",
        name: this.user,
        result: this.searchResults,
        type: "search",
      },
      {
        title: "User's repositories",
        result: this.repos,
        type: "repos",
      },
      {
        title: "User's followers",
        result: this.followers,
        type: "followers",
      },
      {
        title: "User's subscriptions",
        result: this.subscriptions,
        type: "subscriptions",
      },
    ];
  }

  @computed
  get barChartData() {
    return [
      { name: "Rep.", pv: this.repos.length },
      { name: "Fol.", pv: this.followers.length },
      { name: "Sub.", pv: this.subscriptions.length },
    ];
  }
}

export default UserDataStore;
