// - Import npm packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import TextSuccess from "./TextSuccess";
// - Custom Components/Interfaces
import { signUp } from "../../store/actions";
// - Stylesheets
import "./SignUpComponent.css";

const SignUpComponent = () => {
  // - States (useState)
  const dispatch = useDispatch();
  const error = useSelector((state) => state.signupReducer.error);
  const response = useSelector((state) => state.signupReducer.response);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <div className="browser-signup-area">
        <div className="browser-signup-container">
          <div className="browser-signup-box">
            <div className="signup-left-background"></div>
            <div className="signup-form">
              <div style={{ width: "50px", margin: "0 auto" }}>
                <img src="foodka50.png" />
              </div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string(),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is Required"),
                  password: Yup.string()
                    .required("No password provided.")
                    .min(
                      6,
                      "Password is too short - should be 6 chars minimum."
                    ),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required("No password provided."),
                })}
                onSubmit={(values) => {
                  console.log(values);
                  dispatch(signUp(values));
                }}
              >
                {(formik) => {
                  return (
                    <Form style={{ padding: "5px 5px 0px" }}>
                      <div className="browser-form-control">
                        <Field name="name" type="text" placeholder="Name" />
                        <ErrorMessage name="name" component={TextError} />
                        {error.name && !formik.errors.name && (
                          <TextError>{error.name}</TextError>
                        )}
                      </div>
                      <br />
                      <div className="browser-form-control">
                        <Field name="email" type="text" placeholder="Email" />
                        <ErrorMessage name="email" component={TextError} />
                        {error.email && !formik.errors.email && (
                          <TextError>{error.email}</TextError>
                        )}
                      </div>
                      <br />

                      <div className="browser-form-control">
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                        <ErrorMessage name="password" component={TextError} />
                        {error.password && !formik.errors.password && (
                          <TextError>{error.password}</TextError>
                        )}
                      </div>

                      <br />
                      <div className="browser-form-control">
                        <Field
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component={TextError}
                        />
                        {error.confirmPassword &&
                          !formik.errors.confirmPassword && (
                            <TextError>{error.confirmPassword}</TextError>
                          )}
                        {response == "resolved" &&
                          !formik.errors.confirmPassword && (
                            <TextSuccess>Successfully Signed Up</TextSuccess>
                          )}
                      </div>
                      <br />
                      <button
                        type="submit"
                        className="btn signupBtn"
                        disabled={!(formik.isValid && formik.dirty)}
                      >
                        SIGN UP
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div className="browser-social-signup">
                <div className="fb-google-btn">
                  <a href="/" className="btn fb">
                    <img src="/assets/images/facebook.png" alt="" />
                    Facebook
                  </a>
                  <a href="/" className="btn google">
                    <img src="/assets/images/google.png" alt="" />
                    Google
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                <Link to="/login" className="link">
                  Already Have an Account? LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
