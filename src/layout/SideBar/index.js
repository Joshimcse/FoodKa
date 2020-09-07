import React, { useContext } from "react";
import { SidebarContext } from "../../StoreContextAPI/actions/SidebarContext";
import "./index.css";

const SideBar = () => {
  const { open } = useContext(SidebarContext);
  return (
    <div
      id="mySidenav"
      style={{ width: open.open ? "200px" : 0 }}
      className="sidenav"
    ></div>
  );
};
export default SideBar;
