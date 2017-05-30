import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  render() {
    let input;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onAddTodo(input.value);
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddTodo: (text) => {dispatch(addTodo(text))},
});

export default connect(null, mapDispatchToProps)(AddTodo);
