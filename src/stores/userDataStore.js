import { observable, action, runInAction, reaction } from "mobx";
import axios from "axios";

class UserDataStore {
  @observable searchName;
  @observable user;
  @observable repos;
  @observable followers;
  @observable subscriptions;
  @observable fetchingData;

  constructor(rootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.searchName,
      () => this.searchForUser
    );
  }

  async fetchFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}?client_id=my_client_id&client_secret=my_client_secret_id`;
    const response = await axios.get(url);
    return await response.json();
  }

  @action("Change User to search for")
  changeUserToSearchFor(username) {
    this.searchName = username;
  }

  @action("Search for user on Github")
  searchForUser = async () => {
    if (!this.searchName) return;
    this.fetchingData = true;

    const [user, repos, followers, subsriptions] = await Promise.all([
      this.fetchFromGithub(`/users/${this.searchName}`),
      this.fetchFromGithub(`/users/${this.searchName}/repos`),
      this.fetchFromGithub(`/users/${this.searchName}/followers`),
      this.fetchFromGithub(`/users/${this.searchName}/subscriptions`),
    ]);

    runInAction("Update State after fetching Github's Data", () => {
      this.user = user;
      this.repos = repos;
      this.followers = followers;
      this.subscriptions = subsriptions;
      this.fetchingData = false;
    });
  };
}

export default UserDataStore;
