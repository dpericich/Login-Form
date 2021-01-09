import React from "react";
import "./style.css";
import Input from "./components/Input";
import Button from "./components/Button";
import PopUp from "./components/PopUp";

class App extends React.Component {
  state = {
    username: null,
    password: null,
    popUpOn: false,
  };

  getUserName = (val) => {
    this.setState({ username: val });
  };

  getPassword = (val) => {
    this.setState({ password: val });
  };

  togglePopUP = () => {
    this.setState({ popUpOn: !this.state.popUpOn });
  };

  render() {
    return (
      <div>
        <div className="login">
          <div className="login__header">
            <h1 className="login__header--title">ShoeLocker</h1>
          </div>
          <Input
            placeholder="Email / Username"
            text={this.state.username}
            getInput={this.getUserName}
          />
          <Input
            placeholder="Password"
            text={this.state.password}
            getInput={this.getPassword}
          />
          <Button name="Log In" />
          <a href="#" className="link" onClick={() => this.togglePopUP()}>
            Click Here to Create Account &rarr;
          </a>
        </div>
        {this.state.popUpOn ? (
          <PopUp title={"Create Account"} action={this.togglePopUP} />
        ) : null}
      </div>
    );
  }
}

export default App;
