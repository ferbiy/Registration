import React from "react";

function BankBlock(props) {
  return (
    <div className="bank-block">
      <div className="bank-block__left">
        <h3>Currency</h3>
        <select
          value={props.value.currency}
          onChange={props.onChange}
          id={props.id}
        >
          <option value="" disabled style={{ display: "none" }}>
            Select
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="bank-block__right">
        <h3>Initial deposit</h3>
        <input
          type="number"
          min="1"
          className="number-block"
          value={props.value.intialDeposit}
          onChange={props.onChange}
          id={props.id}
        />
      </div>
      <button type="button" onClick={props.onChange}>
        -
      </button>
    </div>
  );
}

export default BankBlock;
