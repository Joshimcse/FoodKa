// - Import npm packages
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
// - Custom Components/Interfaces

// - Stylesheets
import "./Header.css";

const DesktopHeader = () => {
  // - States (useState)
  const [isSidebarOpend, setIsSidebarOpend] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/*  Header section */}
      <header className="header">
        <div
          className="hamburger"
          onClick={() => setIsSidebarOpend(!isSidebarOpend)}
        >
          {isSidebarOpend ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <div className="logo">
          <img src="/assets/images/foodka50.png" alt="" />
        </div>
        <div className="search">
          <input type="text" />
        </div>
      </header>
      {/*  Header section end */}
    </>
  );
};

export default DesktopHeader;
