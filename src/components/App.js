import React from "react";
import Credentials from "./credentials";
import PersonalInfo from "./personal-info";
import BankAccounts from "./bank-accounts";
import validation from "../services/validation";
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

    this.handleCredentials = this.handleCredentials.bind(this);
    this.handlePersonalInfo = this.handlePersonalInfo.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCredentials(e) {
    const { id, value } = e.target;
    let newState = Object.assign({}, this.state);
    newState.credentials[id] = value;
    this.setState(newState);
  }
  handlePersonalInfo(e) {
    const { id, value } = e.target;
    let newState = Object.assign({}, this.state);
    newState.personalInfo[id] = value;
    this.setState(newState);
  }

  handleBank(newBank) {
    this.setState({ bankAccounts: newBank });
  }

  handleSubmit(event) {
    event.preventDefault();

    let uri = "https://jsonplaceholder.typicode.com/posts",
      method = "POST";

    if (validation(this.state)) {
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
          <Credentials onChange={this.handleCredentials} />
          <PersonalInfo onChange={this.handlePersonalInfo} />
          <BankAccounts state={this.state} handleBank={this.handleBank} />

          <p className="small-text">*All fields are required</p>

          <input type="submit" value="Send" className="button button--big" />
        </form>
      </div>
    );
  }
}

export default App;
