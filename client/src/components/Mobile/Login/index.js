// - Import npm packages
import React from "react";
// - Custom Components/Interfaces

// - Stylesheets
import "./Login.css";
const index = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <div className="mobile-login">
      <div className="login-header">
        <div className="foodka-text">
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
        <a href="/">CREATE AN ACCOUNT</a>
      </div>
      <div className="login-btn btn">
        <a href="/">LOGIN</a>
      </div>

      <div className="social-login">
        <p className="text-white">Connect With Other Ways</p>
        <div className="fb-google-btn">
        <a href="/" className="btn fb">
          <img src="/assets/images/facebook.png" />
          Facebook
        </a>
        <a href="/" className="btn google">
          <img src="/assets/images/google.png" />
          Google
        </a>
        </div>
      </div>
    </div>
  );
};

export default index;
