// - Import npm packages
import React, { useState } from "react";
import styled from "styled-components";
import { GrMenu, GrClose, GrMoreVertical, GrSearch } from "react-icons/gr";
import { withRouter } from "react-router-dom";
// - Custom Components/Interfaces

// - Stylesheets
import "./Header.css";

const SearchBar = styled.input``;

const DesktopHeader = (props) => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillUnmount)

  // - Custom methods & identifiers

  return (
    <>
      {/*  Header section */}
      <header className="desktop-header">
        <div className="hamburger">
          <GrMenu style={{ color: "#ebc535 !important" }} />
        </div>
        <div className="header-logo">
          <img
            src="/foodka50.png"
            width="40px"
            alt="Foodka"
            onClick={() => props.history.push("/")}
          />
        </div>
        <form className="desktop-searchArea">
          <input
            type="text"
            placeholder="Search for foods (e.g. pizza, burger)"
            className="searchBox"
          />
          <button type="submit" className="searchBtn">
            <GrSearch />
          </button>
        </form>
        <div className="auth">
          <div className="signin" onClick={() => props.history.push("/login")}>
            Log In
          </div>
          <div className="signup" onClick={() => props.history.push("/signup")}>
            Sign Up
          </div>
        </div>
      </header>
      <div className="mb-desktop-header">""</div>
      {/*  Header section end */}
    </>
  );
};

export default withRouter(DesktopHeader);
