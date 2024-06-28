import * as React from "react";
import '../../assets/styles/Signup.css'
import { InputField } from "../common/FormInputGroup";

export const Names: React.FC<{ firstName: string, lastName: string }> = ({ firstName, lastName }) => {
  return <>
    <InputField type="text" label="" name='firstName' placeholder="Enter First Name" className="nameInput" value={firstName} />
    <InputField type="text" label="" name='lastName' placeholder="Enter Last Name" className="nameInput" value={lastName} />
  </>
}
