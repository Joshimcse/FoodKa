// - Import npm packages
import React from "react";
import { isMobileOnly } from "react-device-detect";
// - Custom Components/Interfaces
import MobileLoginPage from "./MobileLoginPage";

// - Stylesheets
import "./Login.css";

const Login = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobileOnly ? <MobileLoginPage /> : "";
};

export default Login;
