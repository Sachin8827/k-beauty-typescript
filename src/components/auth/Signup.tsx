import { InputField } from "./../Common/FormInputGroup";
import * as React from "react";
import "../../assets/styles/Signup.css";


export const EmailPassword: React.FC<{ email: string, password: string }> = ({ email, password }) => {
  return <>
    <InputField label="" type="text" name='email' placeholder="Enter Email" className="emailInput" value={email} />
    <InputField label="" type="password" name='password' placeholder="Enter Password" className="passInput" value={password} />
  </>
}
