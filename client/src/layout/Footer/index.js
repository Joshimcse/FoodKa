// - Import npm packages
import React from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import MobileFooter from "./MobileFooter";
import BrowserFooter from "./BrowserFooter";

// - Stylesheets

const Footer = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return isMobile ? <MobileFooter /> : <BrowserFooter />;
};

export default Footer;
