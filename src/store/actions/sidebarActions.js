import * as Types from "./actionTypes";

/**
 * Left Sidebar
 */

export const showLeftSidebar = () => {
  return {
    type: Types.SHOW_LEFT_SIDEBAR,
  };
};
export const hideLeftSidebar = () => {
  return {
    type: Types.HIDE_LEFT_SIDEBAR,
  };
};

/**
 * Cart Sidebar
 */

export const showCartSidebar = () => {
  return {
    type: Types.SHOW_CART_SIDEBAR,
  };
};
export const hideCartSidebar = () => {
  return {
    type: Types.HIDE_CART_SIDEBAR,
  };
};
