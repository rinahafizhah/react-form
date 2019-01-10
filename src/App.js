import React, { Component } from "react";
import TodoApp from "./TodoApp";
import styled from "styled-components";
import { Button } from "reactstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
const Container = styled.div`
  background-color: #e1e3de;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <h1>Learn React Form</h1>
            <Button color="primary">Let's Go!</Button>
            <TodoApp />
          </Container>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
      </Router>
    );
  }
}

export default App;
