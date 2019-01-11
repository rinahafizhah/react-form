import React, { Component } from "react";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";


class App extends Component {
  render() {
    return <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
        </div>
      </Router>;
  }
}

export default App;
