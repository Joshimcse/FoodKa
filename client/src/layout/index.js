// - Import npm packages
import React from "react";
// - Custom Components/Interfaces
import Header from "./Header";
import Footer from "./Footer";
// - Stylesheets

const Layout = ({children}) => {
  // - States (useState)

  // - useEffect - (componentDidMount, componentDidUpdate & componentWillMount)

  // - Custom methods & identifiers

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
