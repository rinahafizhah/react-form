import React, { Component } from "react";
import styled from "styled-components"

const Form = styled.form`
display: flex;
align-items: center;
flex-direction: row;
margin: 15px 0;
`

const Title = styled.h1`
  color: rgb(0, 0, 255)
`

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Textarea = styled.input`
border : 3px solid blue;
border-radius: 10px;
padding: 10px;
width: 500px;
`
const Button = styled.input`
  background-color: rgb(152, 212, 243);
  border: 3px solid #6f7375;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px;
`;

const Remove = styled.input`
  background-color: rgb(152, 212, 243);
  border: 3px;
  border-radius: 10px;
  padding: 10px;
`;

const Listtodo = styled.ul`
  list-syle: none;
  border: 1px solid #ccc;
  margin-top: -1px;
  line-height: 2;
  padding: 2px 20px;
  background: white;
`;

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      latestId: 0,
      todos: []
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();

    const latestId = this.state.latestId;
    const newTodo = {
      id: latestId,
      text: this.state.input
    };

    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      latestId: latestId + 1,
      todos: newTodos
    });
  };

  removeTodo = indexToRemove => {
    const newTodos = this.state.todos.filter((todo, index) => {
      return index !== indexToRemove;
    });

    this.setState({
      todos: newTodos
    });
  };

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <li key={index}>
          {todo.id}:{todo.text}{" "}
          <Remove
            type="button"
            value="Remove"
            onClick={() => this.removeTodo(index)}
          />
        </li>
      );
    });

    return (
      <Container>
        <Title>Todo App</Title>
        <Form onSubmit={this.handleTodoSubmit}>
          <Textarea
            type="text"
            placeholder="What's interesting today?"
            onChange={this.handleTodoInput}
          />
          <Button type="submit" value="Add Todo" />
        </Form>
        <Listtodo>{todoList}</Listtodo>
      </Container>
    );
  }
}
export default TodoApp;
