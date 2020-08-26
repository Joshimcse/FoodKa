// - Import npm packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import TextSuccess from "./TextSuccess";
// - Custom Components/Interfaces
import { login } from "../../store/actions";
// - Stylesheets
import "./LoginComponent.css";

const LoginComponent = () => {
  // - States (useState)
  const [showForgotPass, setShowForgotPass] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <div className="browser-login-area">
        <div className="browser-login-container">
          <div className="browser-login-box">
            <div className="login-left-background"></div>
            {!showForgotPass ? (
              <div className="login-form">
                <div style={{ width: "50px", margin: "0 auto" }}>
                  <img src="foodka50.png" />
                </div>
                <br />
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is Required"),
                    password: Yup.string().required("No password provided."),
                  })}
                  onSubmit={(values) => {
                    dispatch(login(values));
                  }}
                >
                  {(formik) => {
                    return (
                      <Form style={{ padding: "5px 5px 0px" }}>
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
                          {isAuthenticated && !formik.errors.password && (
                            <TextSuccess>Successfully Logged In</TextSuccess>
                          )}
                        </div>
                        <div
                          style={{
                            width: "100%",
                            marginBottom: "10px",
                            marginTop: "15px",
                          }}
                        >
                          <Link
                            onClick={() => setShowForgotPass(true)}
                            className="text-left link"
                          >
                            Forget Password
                          </Link>
                        </div>

                        <br />
                        <button
                          type="submit"
                          className="btn loginBtn"
                          disabled={!(formik.isValid && formik.dirty)}
                        >
                          LOG IN
                        </button>
                      </Form>
                    );
                  }}
                </Formik>

                <div className="browser-social-login">
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
                  <Link to="/signup" className="link">
                    CREATE AN ACCOUNT
                  </Link>
                </div>
              </div>
            ) : (
              <div className="login-form">
                <div style={{ width: "50px", margin: "0 auto" }}>
                  <img src="foodka50.png" />
                </div>
                <br />
                <Formik
                  initialValues={{
                    forgotemail: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is Required"),
                  })}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {(formik) => {
                    return (
                      <Form style={{ padding: "15px 15px 0px" }}>
                        <div className="browser-form-control">
                          <Field name="email" type="text" placeholder="Email" />
                          <ErrorMessage name="email" component={TextError} />
                          {error.email && !formik.errors.email && (
                            <TextError>{error.email}</TextError>
                          )}
                        </div>
                        <br />
                        <div className="browser-social-login">
                          <div className="fb-google-btn">
                            <button
                              href="JavaScript:Void(0);"
                              onClick={() => setShowForgotPass(false)}
                              className="btn backBtn"
                            >
                              Back
                            </button>
                            <button type="submit" className="btn submitBtn">
                              Submit
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
