import React from "react";

function Input(props) {
  return (
    <div className="field-block">
      <label htmlFor="login">{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        parent={props.parent}
        maxLength={props.maxLength}
        required
        className="input input--half"
      />
    </div>
  );
}

export default Input;
