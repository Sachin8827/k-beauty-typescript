import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
} from "firebase/auth";
import { setUser } from "../../Redux/UserSlice";
import { app } from "../../firebaseConfig";
import { findByEmail } from "../common/CommanFunctions";
import { loginFormValues } from "../../Types/Types";
import { validationSchema } from "../../validations/SchemaValidations";
import { toast } from "react-toastify";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import "../../assets/styles/login.css";
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHub = new GithubAuthProvider();
  const { get } = useLocalStorage("users");
  const currentValidationStep = validationSchema[0]
  const handleSubmit = (values: loginFormValues) => {
    // Your form submission logic here
    try {
      const data = get();
      const status = findByEmail(data, values.email);
      if (status) {
        if (status.password == values.password) {
          dispatch(setUser(status));
          navigate("/");
        } else toast.error("Wrong Password");
      } else {
        toast.error("user not found.. kindly please signup");
      }
      // setSubmitting();
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGithub = async () => {
    try {
      const response = await signInWithPopup(auth, gitHub);
      setData(response);
    } catch (error) {
      console.log("error");
    }
  };
  const setData = (response: any) => {
    const { email, phoneNumber, providerData, accessToken, refreshToken } =
      response.user;
    const user: any = {
      firstName: response.user.providerData[0].displayName,
      email: email,
      phoneNumber,
      accessToken,
      providerData,
      refreshToken,
    };
    dispatch(setUser(user));
    if (email && accessToken) navigate("/");
  };

  return (
    <>
      <section className='login-section'>
        <div className='container'>
          <div className='login-form'>
            <p>LOGIN</p>
            <p>Please enter your email and password</p>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={currentValidationStep}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form >
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='email'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='error'
                  />

                  <div className='pass'>
                    <Field
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='password'
                    />
                    <ErrorMessage
                      name='password'
                      component='span'
                      className='error'
                    />

                    <div className='forgot'>Forgot Password?</div>
                  </div>
                  <button
                    type='submit'
                    // disabled={isSubmitting}
                    className='submitButton'
                  >
                    LOGIN
                  </button>
                </Form>
              )}
            </Formik>

            <GoogleLoginButton onClick={signUpWithGoogle} style={{ width: '100%', height: '40px', marginTop: '2rem', marginBottom: '2rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'center' }} />
            <GithubLoginButton onClick={handleGithub} style={{ width: '100%', height: '40px', marginBottom: '2rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'center' }} />


            <p style={{ letterSpacing: "1px", fontSize: "13px" }}>
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/signup")}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Create one
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default LoginForm;
