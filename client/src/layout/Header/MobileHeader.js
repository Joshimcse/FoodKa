// - Import npm packages
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
import { GrMenu, GrClose, GrMoreVertical } from "react-icons/gr";
// - Custom Components/Interfaces

// - Stylesheets

const MobileHeader = () => {
  // - States (useState)
  const [isLeftSidebarOpend, setIsLeftSidebarOpend] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <header className="mobile-header">
      <div
        className="hamburger"
        onClick={() => setIsLeftSidebarOpend(!isLeftSidebarOpend)}
      >
        {isLeftSidebarOpend ? <GrClose /> : <GrMenu />}
      </div
        
      >
      <form className="searchArea">
        <input type="text" placeholder="Search for foods (e.g. fizza, burger)" className="searchBox" />
        <button type="submit" className="searchBtn">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="dots">
        <GrMoreVertical />
      </div>
    </header>
  );
};

export default MobileHeader;
