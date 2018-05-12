import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Home from "../sailer/pages/Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import Catergory from "./pages/Category";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:city" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={Home} />
          <Route exact path="/:city/:category" component={Catergory} />
          <Route
            exact
            path="/:city/:category/:listings"
            component={Catergory}
          />
          <Route
            exact
            path="/:city/:category/:listings/:item"
            component={Details}
          />
        </div>
      </Router>
    );
  }
}
