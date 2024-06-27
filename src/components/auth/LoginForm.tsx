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
import { findByEmail } from "../Common/CommanFunctions";
import { loginFormValues } from "../../Types/Types";
import { validationSchema } from "../../Validations/SchemaValidations";
import { toast } from "react-toastify";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
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
          navigate("/home");
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
    if (email && accessToken) navigate("/home");
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
            <button
              type='button'
              className='login-with-google-btn'
              onClick={signUpWithGoogle}
            >
              Sign in with Google
            </button>
            <button type='button' className='github-btn' onClick={handleGithub}>
              <div>
                <svg
                  fill='#000000'
                  viewBox='0 0 30 30'
                  width='20px'
                  height='20px'
                >
                  <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
                </svg>
              </div>
              Login with Github
            </button>

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
