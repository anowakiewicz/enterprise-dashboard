import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import App from "./App";
import RootStore from "./stores/rootStore";

import "normalize.css";
import "./index.css";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider
    rootStore={rootStore}
    userDataStore={rootStore.userDataStore}
    uiStore={rootStore.uiStore}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
