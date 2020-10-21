import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
