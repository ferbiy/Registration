import React from "react";
import Input from "./input";

class PersonalInfo extends React.Component {
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    const { id, value } = e.target,
      updatedInfo = {};
    updatedInfo[id] = value;
    this.props.handlePersonalInfoUpdate(updatedInfo);
  }

  render() {
    let parent = "personalInfo";
    return (
      <div>
        <h2 className="heading heading--large">Personal Information</h2>
        <Input
          name="First name"
          id="firstName"
          onChange={this.handleFieldChange}
          maxLength="30"
          type="text"
        />
        <Input
          name="Last name"
          id="lastName"
          onChange={this.handleFieldChange}
          maxLength="30"
          type="text"
        />
        <Input
          name="Address"
          id="address"
          onChange={this.handleFieldChange}
          maxLength="50"
          type="text"
        />
        <Input
          name="Email"
          id="email"
          onChange={this.handleFieldChange}
          type="email"
        />
      </div>
    );
  }
}

export default PersonalInfo;
