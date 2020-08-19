// - Import npm packages
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./Header";
// - Stylesheets
import "./Header.css";

const Header = () => {
  // - States (useState)
  const [isSidebarOpend, setIsSidebar] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
