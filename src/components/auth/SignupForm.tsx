import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../Validations/SchemaValidations";
import { EmailPassword } from "../auth/Signup";
import { Names } from "../auth/PersonalInfo";
import { findByEmail } from "../Common/CommanFunctions";
import { Place } from "../auth/Address";
import Button from "./../Common/Button";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
import ProgressBar from "../Common/ProgressBar";
import "../../assets/styles/Signup.css";
import { SignUpForm, User } from "../../Types/Types";
const SignupForm: React.FC<SignUpForm> = ({ currentPage, setCurrentPage, FormTitle }) => {
  const navigate = useNavigate();
  const { get, set } = useLocalStorage("users");
  const currentValidationStep = validationSchema[currentPage];
  const initialValues: User = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  };
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
    console.log("previous click");
  };

  const RenderPage = (values: User) => {
    const { email, password, firstName, lastName, street, city } = values;

    if (currentPage === 0) {
      return <EmailPassword email={email} password={password} />;
    } else if (currentPage === 1) {
      return <Names firstName={firstName} lastName={lastName} />;
    } else if (currentPage === 2) {
      return <Place street={street} city={city} />;
    }
  };

  const handleSubmit = (values: User, actions: { setSubmitting: (status: boolean) => void }) => {
    console.log("asdfasdf")
    if (currentPage === FormTitle.length - 1) {
      // Logic for final form submission
      const users = get();

      const status = findByEmail(users, values.email);
      if (status) {
        toast.error("Already Signed In");
      } else {
        set(values);
        toast.success("Sign Up success");
        navigate("/login");
      }
    } else {
      // Logic for navigating to next page
      setCurrentPage(currentPage + 1);
      actions.setSubmitting(false); // Ensure form submission is not triggered here
    }
  };

  return (
    <>
      <div className="container">
        <div className='signup-form'  >
          <ProgressBar FormTitle={FormTitle} currentPage={currentPage} />
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidationStep}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form className="form-at-smallscreen">
                <h1 className='signup-heading'>{FormTitle[currentPage]}</h1>
                <p>Please fill the information below</p>
                <div className='text-start'>
                  {RenderPage(values)}
                </div>
                <div className='mt-5'>
                  {currentPage !== 0 && (
                    <button
                      type="button"
                      className='previousButton'
                      onClick={handleBack}
                    >
                      Prev
                    </button>
                  )}
                  <Button
                    text={currentPage !== 2 ? "Next" : "Finish"}
                    className='nextButton'
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div className='log' style={{ marginTop: "1.5rem", cursor: "pointer", letterSpacing: '0.7px' }}>
            Already a user ? <a onClick={() => navigate("/login")} style={{ textDecoration: "underline" }}>Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignupForm;
