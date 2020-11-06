import React from "react";

export default function BankBlock(props) {
  return (
    <div className="bank-block">
      <div className="bank-block__column">
        <h3 className="heading heading--small">Currency</h3>
        <select
          value={props.value.currency}
          onChange={props.changeCurrency}
          data-id={props.dataId}
          className="select select--strange-arrow--down"
        >
          <option value="" disabled style={{ display: "none" }}>
            Select
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="bank-block__column">
        <h3 className="heading heading--small">Initial deposit</h3>
        <input
          type="number"
          min="1"
          className="input"
          value={props.value.intialDeposit}
          onChange={props.changeDeposit}
          data-id={props.dataId}
        />
      </div>
      <button
        type="button"
        onClick={props.removeAccount}
        className="button button--little"
        data-id={props.dataId}
      >
        -
      </button>
    </div>
  );
}
