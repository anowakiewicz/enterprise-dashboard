import _isFunction from "lodash/isFunction";

export default class RootStore {
  constructor() {
    this.injectablesNames = [];
  }

  init() {
    // initialize stores
    this.injectablesNames.forEach((key) => {
      const obj = this[key];
      if (_isFunction(obj.init)) {
        obj.init();
      }
    });
  }
}
