import React, { Component } from "react";
import { connect } from "react-redux";
import { visibilityFilter } from "../actions";

class FilterLinks extends Component {
  render() {
    return (
      <div>
        <span><a href="#"
          onClick={() => this.props.onClickLink("SHOW_ALL")}
        >All</a></span>
        <span><a href="#"
          onClick={() => this.props.onClickLink("COMPLETED")}
        >Completed</a></span>
        <span><a href="#"
          onClick={() => this.props.onClickLink("UNCOMPLETED")}
        >Undone</a></span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, action) => ({
  onClickLink: (filter) => {dispatch(visibilityFilter(filter))}
});

export default connect(null, mapDispatchToProps)(FilterLinks);
