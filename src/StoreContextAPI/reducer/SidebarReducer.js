import * as Types from "../actionTypes";

export const init = {
  open: true,
};

const SidebarReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SHOW_LEFT_SIDEBAR: {
      return {
        ...state,
        open: true,
      };
    }
    case Types.HIDE_LEFT_SIDEBAR: {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};

export default SidebarReducer;
