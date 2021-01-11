import React from "react";

class Input extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    if (this.props.focus) {
      this.inputRef.current.focus();
    }
  }
  render() {
    const { placeholder, text, getInput } = this.props;
    return (
      <input
        className=" input"
        placeholder={placeholder}
        value={text}
        onChange={(e) => getInput(e.target.value)}
        ref={this.inputRef}
      ></input>
    );
  }
}

export default Input;
