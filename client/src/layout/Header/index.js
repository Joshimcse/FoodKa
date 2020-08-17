// - Import npm packages
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { isMobile } from "react-device-detect";
// - Custom Components/Interfaces

// - images
import foodkaLogo from "../../assets/images/foodka50.png";

// - Stylesheets
import "./Header.css";

const Header = () => {
  // - States (useState)
  const [isSidebarOpend, setIsSidebar] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/*  Header section */}
      <header className="header">
        <div className="hamburger">
          {isSidebarOpend ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <div className="logo">
          <img src={foodkaLogo} alt="" />
        </div>
        <div className="search">
          <input type="text" />
        </div>
      </header>
      {/*  Header section end */}
    </>
  );
};

export default Header;
