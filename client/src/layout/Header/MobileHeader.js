// - Import npm packages
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
// - Custom Components/Interfaces

// - Stylesheets

const MobileHeader = () => {
  // - States (useState)
  const [isLeftSidebarOpend, setIsLeftSidebarOpend] = useState(false);

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <header className="mobile-header">
      <div className="hamburger" onClick={() => setIsLeftSidebarOpend(!isLeftSidebarOpend)}>
        {isLeftSidebarOpend ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="searchInput">
        <input className="searchBox" />
        <button type="submit" className="searchBtn"><GrSearch /></button>
      </div>
      <div className="dots">
        <AiOutlineMore />
      </div>
    </header>
  );
};

export default MobileHeader;
