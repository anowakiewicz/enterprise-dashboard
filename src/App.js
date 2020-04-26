import React from "react";

import Dashboard from "./containers/Dashboard";
import AppWrapper from "./containers/AppWrapper";

import H1 from "./common-components/H1";

function App() {
  return (
    <AppWrapper>
      <H1>Enterprise User Dashboard</H1>
      <Dashboard />
    </AppWrapper>
  );
}

export default App;
