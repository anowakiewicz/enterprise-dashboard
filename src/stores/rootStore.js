import UserDataStore from "./userDataStore";

export default class RootStore {
  constructor() {
    this.userDataStore = new UserDataStore(this);
  }
}
