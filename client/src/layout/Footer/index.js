// - Import npm packages
import React from "react";
import { isMobileOnly } from "react-device-detect";
// - Custom Components/Interfaces
import MobileFooter from "./MobileFooter";
import BrowserFooter from "./BrowserFooter";

// - Stylesheets
import "./Footer.css";

const Footer = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobileOnly ? <MobileFooter /> : <BrowserFooter />;
};

export default Footer;
