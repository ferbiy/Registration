import React from "react";
import Input from "./input";

function PersonalInfo(props) {
  let parent = "personalInfo";
  return (
    <div>
      <h2 className="h2">Personal Information</h2>
      <Input
        name="First name"
        id="firstName"
        onChange={props.onChange}
        parent={parent}
        maxLength="30"
        type="text"
      />
      <Input
        name="Last name"
        id="lastName"
        onChange={props.onChange}
        parent={parent}
        maxLength="30"
        type="text"
      />
      <Input
        name="Address"
        id="address"
        onChange={props.onChange}
        parent={parent}
        maxLength="50"
        type="text"
      />
      <Input
        name="Email"
        id="email"
        onChange={props.onChange}
        parent={parent}
        type="email"
      />
    </div>
  );
}

export default PersonalInfo;
