import React, { Component } from "react";
import TodoApp from "./TodoApp";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e1e3de;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Learn React Form</h1>
        <TodoApp />
      </Container>
    );
  }
}

export default App;
