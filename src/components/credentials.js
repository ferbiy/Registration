import React from "react";
import Input from "./input";

class Credentials extends React.Component {
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    const { id, value } = e.target,
      updatedCredentials = {};
    updatedCredentials[id] = value;
    this.props.handleCredentialsUpdate(updatedCredentials);
  }

  render() {
    let parent = "credentials";
    return (
      <div>
        <h2 className="heading heading--large">Credentials</h2>
        <Input
          name="Login"
          id="login"
          onChange={this.handleFieldChange}
          maxLength="10"
          type="text"
        />
        <Input
          name="Password"
          id="pass"
          onChange={this.handleFieldChange}
          maxLength="10"
          type="password"
        />
      </div>
    );
  }
}

export default Credentials;
