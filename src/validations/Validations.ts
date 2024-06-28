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

