// - Import npm packages
import React from "react";
import { isMobileOnly } from "react-device-detect";
// - Custom Components/Interfaces
import DesktopHeader from "./Header";
// - Stylesheets
import "./Header.css";

const Header = () => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return <>{isMobileOnly ? "" : <DesktopHeader />}</>;
};

export default Header;
