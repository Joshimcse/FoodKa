// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets
import "./LoginComponent.css";

const LoginComponent = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

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
