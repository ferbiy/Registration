import React from "react";
import BankBlock from "./bank-block";
import AddButton from "./add-account";

export default class BankAccounts extends React.Component {
  constructor() {
    super();
    this.state = {
      bankAccounts: [{ currency: "", intialDeposit: 1 }],
    };
    this.handleAddBank = this.handleAddBank.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.removeAccount = this.removeAccount.bind(this);
  }

  handleChange(newBank) {
    setTimeout(() => {
      this.setState({ bankAccounts: newBank });
      this.props.handleBank(this.state.bankAccounts);
    }, 1);
  }

  handleAddBank() {
    let newBank = [...this.state.bankAccounts];
    newBank.push({
      currency: "",
      intialDeposit: 1,
    });

    this.handleChange(newBank);
  }

  handleCurrency(e) {
    let newBank = [...this.state.bankAccounts],
      id = e.target.getAttribute("data-id"),
      value = e.target.value;

    newBank[id].currency = value;

    this.handleChange(newBank);
  }

  handleDeposit(e) {
    let newBank = [...this.state.bankAccounts],
      id = e.target.getAttribute("data-id"),
      value = e.target.value;

    newBank[id].intialDeposit = value;

    this.handleChange(newBank);
  }

  removeAccount(e) {
    let newBank = [...this.state.bankAccounts],
      id = e.target.getAttribute("data-id");

    //must be at least 1 bank account
    if (newBank.length > 1) {
      newBank.splice(id, 1);
      this.handleChange(newBank);
    }
  }

  render() {
    return (
      <div>
        <h2 className="h2">Bank accounts</h2>
        {this.state.bankAccounts.map((acc, i) => (
          <BankBlock
            key={i}
            dataId={i}
            value={acc}
            changeCurrency={this.handleCurrency}
            changeDeposit={this.handleDeposit}
            removeAccount={this.removeAccount}
          />
        ))}
        <AddButton
          length={this.state.bankAccounts.length}
          handleAddBank={this.handleAddBank}
        />
      </div>
    );
  }
}
