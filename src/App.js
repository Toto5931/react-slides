import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css"
import Organisation from "./Organisation.js"

export default function App() {
  const [date, setDate] = useState(0);
  return (
    <Router>
      <div id="app_div">
        <div id='left_menu'>

          <ul>
            <li>
              <Link to="/organisation/2020">2020</Link>
            </li>
            <li>
              <Link to="/organisation/2021">2021</Link>
            </li>
            <li>
              <Link to="/organisation/2022">2022</Link>
            </li>
            <li>
              Current date: {date}
            </li>
          </ul>
        </div>

        <div id="right_frame">
          <Switch>
            <Route path="/Organisation/:day">
              <Organisation setDate={setDate}></Organisation>
            </Route>
            <Route path="/Organisation">
              <Organisation setDate={setDate}></Organisation>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
