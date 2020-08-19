// - Import npm packages
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
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
        onClick={() => console.log('clicked')}
      >
        {isLeftSidebarOpend ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div
        
      >
      <form className="searchArea">
        <input className="searchBox" />
        <button type="submit" className="searchBtn">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="dots">
        <AiOutlineMore />
      </div>
    </header>
  );
};

export default MobileHeader;
