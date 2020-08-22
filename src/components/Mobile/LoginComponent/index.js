// - Import npm packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import TextSuccess from "./TextSuccess";
// - Custom Components/Interfaces
import { login } from "../../../store/actions";
// - Stylesheets
import "./LoginComponent.css";

const LoginComponent = () => {
  // - States (useState)
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <div className="mobile-login-area">
        <div className="login-header"></div>
        <div className="login-container">
          <div className="login-box">
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
                  <Form style={{ padding: "5px 20px 0px" }}>
                    <div className="form-control">
                      <label htmlFor="">Email</label>
                      <Field name="email" type="text" />
                      <ErrorMessage name="email" component={TextError} />
                      {error.email && <TextError>{error.email}</TextError>}
                    </div>

                    <div className="form-control">
                      <label htmlFor="">Password</label>
                      <Field name="password" type="password" />
                      <ErrorMessage name="password" component={TextError} />
                      {error.password && (
                        <TextError>{error.password}</TextError>
                      )}
                    </div>
                    <div style={{ width: "100%", marginBottom: "10px" }}>
                      <a href="/" className="text-left link">
                        Forget Password
                      </a>
                    </div>

                    {isAuthenticated && (
                      <TextSuccess>Successfully Logged In</TextSuccess>
                    )}
                    <br />
                    <button
                      type="submit"
                      className="btn login"
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      LOG IN
                    </button>
                  </Form>
                );
              }}
            </Formik>
            {/* 
            <div className="form-control">
              <label htmlFor="">Mobile Number/Email</label>
              <input type="text" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input type="password" name="password" />
            </div>
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <a href="/" className="text-left link">
                Forget Password
              </a>
            </div>

            <a href="/login" className="btn login">
              LOGIN
            </a> */}
          </div>
          <div style={{ width: "100%", marginBottom: "10px" }}>
            <a href="/signup" className="text-left link">
              CREATE AN ACCOUNT
            </a>
          </div>
          <div className="social-login">
            <p className="text-gray">Connect With Other Ways</p>
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
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
