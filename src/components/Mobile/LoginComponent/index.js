// - Import npm packages
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// - Custom Components/Interfaces
import { login } from "../../../store/actions";
// - Stylesheets
import "./LoginComponent.css";

const LoginComponent = () => {
  // - States (useState)
  let data = {};
  data.emailOrPhone = "joshimcse@gmail.com";
  data.password = "123456";
  const dispatch = useDispatch();

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)
  useEffect(() => {
    dispatch(login(data)); // will be called in onSubmit of the form
  }, []);
  // - Custom methods & identifiers

  return (
    <>
      <div className="mobile-login-area">
        <div className="login-header"></div>
        <div className="login-container">
          <div className="login-box">
            <div className="form-control">
              <label htmlFor="">Mobile Number/Email</label>
              <input type="text" name="mobileOrEmail" />
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
            </a>
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
