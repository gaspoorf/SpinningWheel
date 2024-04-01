import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfigurePage from "./ConfigurePage";
import RoulettePage from "./RoulettePage";

import { Switch } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/roulette">
            <RoulettePage />
          </Route>
          <Route path="/">
            <ConfigurePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
