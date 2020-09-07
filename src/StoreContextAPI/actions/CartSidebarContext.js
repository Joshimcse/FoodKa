import React, { useState, createContext } from "react";
import CartSidebarReducer, { init } from "../reducer/CartSidebarReducer";
import * as Types from "../actionTypes";
export const CartSidebarContext = createContext();

export const CartSidebarProvider = (props) => {
  const [CartSideBar, dispatch] = React.useReducer(CartSidebarReducer, init);
  const showCartSidebar = () => {
    dispatch({
      type: Types.SHOW_CART_SIDEBAR,
    });
  };
  const hideCartSidebar = () => {
    dispatch({
      type: Types.HIDE_CART_SIDEBAR,
    });
  };

  return (
    <CartSidebarContext.Provider
      value={{ CartSideBar, showCartSidebar, hideCartSidebar }}
    >
      {props.children}
    </CartSidebarContext.Provider>
  );
};
