import React from "react";
import Input from "./input";
import BankBlock from "./bankblock";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleBank = this.handleBank.bind(this);
    this.handleAddBank = this.handleAddBank.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;
    const parent = e.target.attributes.parent.value;
    let newState = Object.assign({}, this.state);
    newState[parent][id] = value;
    this.setState(newState);
  }

  handleBank(e) {
    let id = e.target.id,
      value = e.target.value,
      target = e.target.tagName;

    let newBank = this.state.bankAccounts.map((acc, i) => {
      if (i === Number(id)) {
        if (target === "SELECT") acc.currency = value;
        if (target === "INPUT") acc.intialDeposit = value;
      }
      return acc;
    });

    if (target === "BUTTON" && newBank.length > 1) {
      newBank.splice(id, 1);
    }

    this.setState({ bankAccounts: newBank });
  }

  handleAddBank() {
    let newBank = [...this.state.bankAccounts];
    newBank.push({
      currency: "",
      intialDeposit: 1,
    });

    this.setState({ bankAccounts: newBank });
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = "http://jsonplaceholder.typicode.com/posts ";

    const sendFunction = (data) => {
      fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // header for data
        },
        body: JSON.stringify(data),
      })
        .then((response) => console.log("Request has been sent"))
        .catch((error) => console.error(error));
    };

    function validation(obj) {
      let result = true;
      valid(obj);

      function valid(obj) {
        for (let prop in obj) {
          if (typeof obj[prop] === "object") {
            valid(obj[prop]);
          } else {
            if (prop === "email") {
              let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              result = mailformat.test(obj[prop]);
            }

            if (obj[prop] === "" || obj[prop] === 0) {
              result = false;
            }
          }
        }
      }

      return result;
    }

    if (validation(this.state)) {
      sendFunction(this.state);
    }
  }

  render() {
    return (
      <div className="reg">
        <form
          onSubmit={this.handleSubmit}
          action="/my-handling-form-page"
          method="post"
        >
          <h2>Credentials</h2>
          <Input
            name="Login"
            id="login"
            onChange={this.handleChange}
            parent="credentials"
            maxLength="10"
          />
          <Input
            name="Password"
            id="pass"
            onChange={this.handleChange}
            parent="credentials"
            maxLength="10"
          />
          <h2>Personal Information</h2>
          <Input
            name="First name"
            id="firstName"
            onChange={this.handleChange}
            parent="personalInfo"
            maxLength="30"
          />
          <Input
            name="Last name"
            id="lastName"
            onChange={this.handleChange}
            parent="personalInfo"
            maxLength="30"
          />
          <Input
            name="Address"
            id="address"
            onChange={this.handleChange}
            parent="personalInfo"
            maxLength="50"
          />
          <Input
            name="Email"
            id="email"
            onChange={this.handleChange}
            parent="personalInfo"
          />
          <h2>Bank accounts</h2>
          {this.state.bankAccounts.map((block, i) => (
            <BankBlock
              key={i}
              id={i}
              value={block}
              onChange={this.handleBank}
              parent="bankAccounts"
            />
          ))}
          {this.state.bankAccounts.length < 3 && (
            <div>
              <button
                type="button"
                onClick={this.handleAddBank}
                className="add-bank"
              >
                Add account
              </button>
            </div>
          )}

          <p className="small-text">*All fields are required</p>

          <input type="submit" value="Send" className="send-button" />
        </form>
      </div>
    );
  }
}

export default App;
