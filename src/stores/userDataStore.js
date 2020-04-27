import { observable, action, runInAction, reaction, computed } from "mobx";
import axios from "axios";
import Geocode from "react-geocode";

const API_KEY = process.env.REACT_APP_GEOLOCATION_KEY;
class UserDataStore {
  @observable searchName;
  @observable searchResults = [];
  @observable user = [];
  @observable repos = [];
  @observable subscriptions = [];
  @observable fetchingData = false;
  @observable location;

  constructor(rootStore) {
    this.rootStore = rootStore;
    Geocode.setApiKey(API_KEY);

    reaction(
      () => this.searchName,
      () => this.searchForUser()
    );

    reaction(
      () => this.user,
      () => this.userLocation()
    );
  }

  async fetchUserFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
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

    const [user, repos, subscriptions, searchResults] = await Promise.all([
      this.fetchUserFromGithub(`/users/${this.searchName}`),
      this.fetchUserFromGithub(`/users/${this.searchName}/repos`),
      this.fetchUserFromGithub(`/users/${this.searchName}/subscriptions`),
      this.searchGithubForUsers(`/search/users?q=${this.searchName}`),
      this.userLocation(),
    ]);

    runInAction("Update State after fetching Github's Data", () => {
      this.user = user;
      this.repos = repos;
      this.subscriptions = subscriptions;
      this.searchResults = searchResults;
      this.fetchingData = false;
    });
  };

  @action("Search for user location")
  userLocation() {
    if (!this.user.location) return [];

    return Geocode.fromAddress(this.user.location).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        runInAction(
          "Update State after getting user's location coordinates",
          () => {
            this.location = [
              {
                name: this.user.location,
                coordinates: [lng, lat],
                markerOffset: -15,
              },
            ];
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

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
        result: this.user,
        type: "repos",
      },
      {
        title: "User's followers",
        result: this.user,
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
  get userChartData() {
    return [
      { name: "Rep.", amount: this.user.public_repos || 0 },
      { name: "Fol.", amount: this.user.followers || 0 },
      { name: "Sub.", amount: this.subscriptions.length },
    ];
  }
}

export default UserDataStore;
