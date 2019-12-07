import React, { Component } from "react";
//import * as actions from "actions";
//import { connect } from "react-redux";

export class CommentBox extends Component {
  state = { comment: "" };

  onChange = event => {
    this.setState({ comment: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    //this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>add comment</h3>
          <textarea onChange={this.onChange} value={this.state.comment} />
          <div>
            <button>submit comment</button>
          </div>
        </form>
      </div>
    );
  }
}
