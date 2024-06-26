
import * as React from "react";
import { InputField } from '../Common/FormInputGroup'
// import Cities from "../../utils/constant/Cities";

export const Place: React.FC<{ street: string }> = ({ street }) => {
  return <>
    <InputField label="" type="text" name='street' placeholder="Enter Street" className="nameInput" value={street} />
    <InputField label="" type="text" name='city' placeholder=" Enter city" className="nameInput" />
    {/* <select name="city" id="" className="nameInput">
      {Cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
    </select> */}
  </>
}
