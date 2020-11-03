import React from "react";
import Input from "./input";

function Credentials(props) {
  let parent = "credentials";
  return (
    <div>
      <h2 className="h2">Credentials</h2>
      <Input
        name="Login"
        id="login"
        onChange={props.onChange}
        parent={parent}
        maxLength="10"
        type="text"
      />
      <Input
        name="Password"
        id="pass"
        onChange={props.onChange}
        parent={parent}
        maxLength="10"
        type="password"
      />
    </div>
  );
}

export default Credentials;
