import "../assets/styles/Signup.css";
import { useState } from "react";
import SignupForm from '../components/auth/SignupForm'
function Signup() {
  let [currentPage, setCurrentPage] = useState(0);

  const FormTitle = ["SignUp", "Personal Info", "Address"];
  console.log(currentPage)
  return (
    <>
      <SignupForm
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        FormTitle={FormTitle}
      />


    </>
  );
}
export default Signup;
