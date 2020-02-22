import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PD1 from "../PD1/PD1.js";
import Parent1 from "../PD2/parent.js";
import Parent from "../PD3/parent.js";
import LifecycleTest from "../PD4/LifecycleTest.js";


export default function RouterExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/PD1/PD1">PD1</Link>
          </li>
          <li>
            <Link to="/PD2/parent">PD2</Link>
          </li>
          <li>
            <Link to="/PD3/parent">PD3</Link>
          </li>
          <li>
            <Link to="/PD4/LifecycleTest">PD4</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/PD1/PD1">
            <PD1 />
          </Route>

          <Route path="/PD2/parent">
            <Parent1 />
          </Route>

          <Route path="/PD3/parent">
            <Parent />
          </Route>

          <Route path="/PD4/LifecycleTest">
            <LifecycleTest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
