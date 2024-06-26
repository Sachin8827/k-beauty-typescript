import { loginFormValues, User } from "../Types/Types";

export const  validateEmail = (values:any, errors:any) =>{
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if(values.password.length <8){
      errors.password = "Length should be more than 8 characters"
    }
    
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password =
        "Password must contain at least one special character";
    }
}
export const validatePersonalInfo = (values:User, errors:User) =>{
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (!/^[a-zA-Z' -]+$/.test(values.firstName)) {
      errors.firstName = "Only letters are allowed";
    }
    if (!values.lastName) {
      console.log("Executed without true");
      errors.lastName = "Last name Required";
    } else if (!/^[a-zA-Z' -]+$/.test(values.lastName)) {
      errors.lastName = "Only letters are allowed";
    }
}
export const  validateAddress = (values:User, errors:User) =>{
    if (!values.street) {
      errors.street = "Street Required";
    } else if (!/^[a-zA-Z' -]+$/.test(values.street)) {
      errors.street = "Only letters are allowed in street";
    }
    if (!values.city) {
      errors.city = "City Required";
    } else if (!/^[a-zA-Z' -]+$/.test(values.city)) {
      errors.city = "Only letters are allowed in city";
    }

}
