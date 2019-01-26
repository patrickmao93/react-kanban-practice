import React from "react";

import Column from "./Column";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      columns: [
        { name: "Winnie", index: 1 },
        { name: "Bob", index: 2 },
        { name: "Thomas", index: 3 },
        { name: "George", index: 4 }
      ],
      todos: [
        {
          id: 1,
          column: 1,
          content: "111111111111"
        },
        {
          id: 2,
          column: 1,
          content: "22222222222"
        },
        {
          id: 3,
          column: 2,
          content: "333333333"
        },
        {
          id: 4,
          column: 2,
          content: "4444444444"
        },
        {
          id: 5,
          column: 3,
          content: "555555555555"
        },
        {
          id: 6,
          column: 3,
          content: "66666666666666"
        },
        {
          id: 7,
          column: 4,
          content: "777777777"
        },
        {
          id: 8,
          column: 4,
          content: "8888888888"
        }
      ]
    };
    let savedState = window.localStorage.getItem("savedState");
    if (savedState) {
      savedState = JSON.parse(savedState);
      console.log(savedState);
      this.state = savedState;
    } else {
      this.state = this.defaultState;
    }
  }

  handleAddCard = (colIndex, content) => {
    const id = this.state.todos.reduce(
      (id, todo) => (todo.id >= id ? todo.id + 1 : id),
      0
    );
    const newTodo = { id, column: colIndex, content: content };
    console.log(newTodo);
    console.log(this.state.todos);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleMoveCard = (colIndex, todoId, dir) => {
    const newTodos = this.state.todos.slice(0);
    const newTodoPos = newTodos.findIndex(todo => todo.id === todoId);
    const newTodo = newTodos.splice(newTodoPos, 1)[0];
    newTodo.column += dir;
    newTodos.push(newTodo);
    this.setState({ todos: newTodos });
  };

  filterTodos(colIndex) {
    return this.state.todos.filter(todo => todo.column === colIndex);
  }

  renderColumns() {
    const columns = this.state.columns.slice(0);
    return columns.map(col => (
      <Column
        key={col.index}
        name={col.name}
        index={col.index}
        todos={this.filterTodos(col.index)}
        onClickAddCard={this.handleAddCard}
        onClickMove={this.handleMoveCard}
      />
    ));
  }

  componentDidUpdate() {
    window.localStorage.setItem("savedState", JSON.stringify(this.state));
    console.log(window.localStorage);
  }

  render() {
    return <div className="board">{this.renderColumns()}</div>;
  }
}

export default Board;
