// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import LoginSignupFeature from "../../components/Mobile/LoginSignupFeature";

// - Stylesheets

const index = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobile ? <LoginSignupFeature /> : "";
};

export default index;
