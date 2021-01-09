import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        className=" input"
        placeholder={this.props.placeholder}
        value={this.props.text}
        onChange={(e) => this.props.getInput(e.target.value)}
      ></input>
    );
  }
}

export default Input;
