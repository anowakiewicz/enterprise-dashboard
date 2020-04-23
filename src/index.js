import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "mobx-react";

import RootStore from "./stores/rootStore";

ReactDOM.render(
  <Provider rootStore={new RootStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
