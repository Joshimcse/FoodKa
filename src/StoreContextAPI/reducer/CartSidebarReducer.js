import * as Types from "../actionTypes";

export const init = {
  open: false,
};

const CartSidebarReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SHOW_CART_SIDEBAR: {
      return {
        ...state,
        open: true,
      };
    }
    case Types.HIDE_CART_SIDEBAR: {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};

export default CartSidebarReducer;
