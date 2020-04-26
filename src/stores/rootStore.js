import UserDataStore from "./userDataStore";
import UiStore from "./uiStore";

export default class RootStore {
  constructor() {
    this.userDataStore = new UserDataStore(this);
    this.uiStore = new UiStore(this);
  }
}
