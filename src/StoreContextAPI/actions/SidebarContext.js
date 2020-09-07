import React, { useState, createContext } from "react";
import SidebarReducer, { init } from "../reducer/SidebarReducer";
import * as Types from "../actionTypes";
export const SidebarContext = createContext();

export const SidebarProvider = (props) => {
  const [open, dispatch] = React.useReducer(SidebarReducer, init);
  const showLeftSidebar = () => {
    dispatch({
      type: Types.SHOW_LEFT_SIDEBAR,
    });
  };
  const hideLeftSidebar = () => {
    dispatch({
      type: Types.HIDE_LEFT_SIDEBAR,
    });
  };

  return (
    <SidebarContext.Provider value={{ open, showLeftSidebar, hideLeftSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};
