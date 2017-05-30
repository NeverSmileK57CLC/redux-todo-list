import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h3>List Todos</h3>
        {this.props.todos.map(t =>
          <ul key={t.id}
            className={t.completed ? "completed" : "uncompleted"}
            onClick={() => this.props.onToggleTodo(t.id)}
          >
            {t.text}|{t.completed ? "true" : "false"}
          </ul>)}
      </div>
    );
  }
}

const filterTodos = (todos, filter) => {
  switch(filter) {
    case "COMPLETED":
      return todos.filter(t => t.completed === true);
    case "UNCOMPLETED":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    todos: filterTodos(state.todos, state.visibilityFilter)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleTodo: (id) => {dispatch(toggleTodo(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
