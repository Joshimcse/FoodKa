// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets
import "./LoginSignupFeature.css";
const LoginSignupFeature = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <div className="mobile-auth-dashboard">
      <div className="auth-header">
        <div className="auth-text">
          <h1>foodka</h1>
          <p>
            Lorem ipsum dolor <br />
            sit amet consectetur
            <br />
            adipisicing elit.
          </p>
        </div>
      </div>
      <div className="signup-btn btn">
        <a href="/signup">CREATE AN ACCOUNT</a>
      </div>
      <div className="login-btn btn">
        <a href="/login">LOGIN</a>
      </div>

      <div className="social-login">
        <p className="text-white">Connect With Other Ways</p>
        <div className="fb-google-btn">
        <a href="/" className="btn fb">
          <img src="/assets/images/facebook.png" alt=""/>
          Facebook
        </a>
        <a href="/" className="btn google">
          <img src="/assets/images/google.png" alt=""/>
          Google
        </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupFeature;
