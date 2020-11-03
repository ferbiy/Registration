import React from "react";

export default function BankBlock(props) {
  return (
    <div className="bank-block">
      <div className="bank-block__column">
        <h3 className="h3">Currency</h3>
        <select
          value={props.value.currency}
          onChange={props.changeCurrency}
          data-id={props.dataId}
          className="select"
        >
          <option
            value=""
            disabled
            style={{ display: "none" }}
            className="select__option"
          >
            Select
          </option>
          <option value="USD" className="select__option">
            USD
          </option>
          <option value="EUR" className="select__option">
            EUR
          </option>
          <option value="UAH" className="select__option">
            UAH
          </option>
        </select>
      </div>
      <div className="bank-block__column">
        <h3 className="h3">Initial deposit</h3>
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
