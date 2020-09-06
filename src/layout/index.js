// - Import npm packages
import React from "react";
// - Custom Components/Interfaces
import Header from "./Header";
import Footer from "./Footer";
// - Stylesheets
import Sidebar from "./SideBar";
import CartBar from "./CartBar";
const Layout = ({ children }) => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillMount)

  // - Custom methods & identifiers

  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <CartBar />
        <div
          style={{
            marginLeft: "200px",
            //width: "calc(100vw - 520px)",
            marginRight: "300px",
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
