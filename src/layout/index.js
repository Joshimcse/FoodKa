// - Import npm packages
import React, { useContext } from "react";
// - Custom Components/Interfaces
import {
  SidebarContext,
  CartSidebarContext,
} from "../StoreContextAPI/actions/";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";
import CartBar from "./CartBar";
// - Stylesheets
const Layout = ({ children }) => {
  // - States (useState)
  const { open } = useContext(SidebarContext);
  const { CartSideBar } = useContext(CartSidebarContext);
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
            marginLeft: open.open ? "200px" : 0,
            //width: "calc(100vw - 520px)",
            marginRight: CartSideBar.open ? "300px" : 0,
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
