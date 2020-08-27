// - Import npm packages
import React, { useState } from "react";
import { GrMenu, GrClose, GrMoreVertical, GrSearch } from "react-icons/gr";
// - Custom Components/Interfaces

// - Stylesheets

const MobileHeader = () => {
  // - States (useState)
  const [isLeftSidebarOpend, setIsLeftSidebarOpend] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      <header className="mobile-header">
        <div
          className="hamburger"
          onClick={() => setIsLeftSidebarOpend(!isLeftSidebarOpend)}
        >
          {isLeftSidebarOpend ? <GrClose /> : <GrMenu />}
        </div>
        <form className="searchArea">
          <input
            type="text"
            placeholder="Search for foods (e.g. pizza, burger)"
            className="searchBox"
          />
          <button type="submit" className="searchBtn">
            <GrSearch />
          </button>
        </form>
        <div className="dots">
          <GrMoreVertical />
        </div>
      </header>
      <div className="mb-mobile-header">""</div>
    </>
  );
};

export default MobileHeader;
