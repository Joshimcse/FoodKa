import React, { useContext } from "react";
import { CartSidebarContext } from "../../StoreContextAPI/actions/";
import "./index.css";

const SideBar = () => {
  const { CartSideBar, showCartSidebar, hideCartSidebar } = useContext(
    CartSidebarContext
  );

  return (
    <div
      id="mySidenav"
      style={{ width: CartSideBar.open ? "300px" : 0 }}
      className="sidenav2"
    >
      <div className="shoppingCartButton" onClick={hideCartSidebar}></div>
    </div>
  );
};
export default SideBar;
