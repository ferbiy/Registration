import React from "react";
import Credentials from "./credentials";
import PersonalInfo from "./personal-info";
import BankAccounts from "./bank-accounts";
import isValid from "../services/validation";
import send from "../services/send";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        login: "",
        pass: "",
      },
      personalInfo: {
        firstName: "",
        lastName: "",
      },
      bankAccounts: [{ currency: "", intialDeposit: 1 }],
    };

    this.handleCredentialsUpdate = this.handleCredentialsUpdate.bind(this);
    this.handlePersonalInfoUpdate = this.handlePersonalInfoUpdate.bind(this);
    this.handleBankUpdate = this.handleBankUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCredentialsUpdate(updatedCredentials) {
    const currentInfo = this.state.credentials;
    const newInfo = { ...currentInfo, ...updatedCredentials };
    this.setState({ credentials: newInfo });
  }
  handlePersonalInfoUpdate(updatedInfo) {
    const currentInfo = this.state.personalInfo;
    const newInfo = { ...currentInfo, ...updatedInfo };
    this.setState({ personalInfo: newInfo });
  }

  handleBankUpdate(newBank) {
    this.setState({ bankAccounts: newBank });
  }

  handleSubmit(event) {
    event.preventDefault();

    let uri = "https://jsonplaceholder.typicode.com/posts",
      method = "POST";

    if (isValid(this.state)) {
      send(this.state, uri, method);
    }
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          action="/my-handling-form-page"
          method="post"
        >
          <Credentials handleCredentialsUpdate={this.handleCredentialsUpdate} />
          <PersonalInfo
            handlePersonalInfoUpdate={this.handlePersonalInfoUpdate}
          />
          <BankAccounts
            state={this.state}
            handleBankUpdate={this.handleBankUpdate}
          />

          <p className="small-text">*All fields are required</p>

          <input type="submit" value="Send" className="button button--big" />
        </form>
      </div>
    );
  }
}

export default App;
