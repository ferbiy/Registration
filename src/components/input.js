import React from "react";

function Input(props) {
  return (
    <div className="form-block">
      <label htmlFor="login">{props.name}</label>
      <input
        type={
          props.id === "pass"
            ? "password"
            : props.id === "email"
            ? "email"
            : "text"
        }
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        parent={props.parent}
        maxLength={props.maxLength}
        required
      />
    </div>
  );
}

export default Input;
