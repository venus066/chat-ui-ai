import { LayoutActionTypes, LayoutState } from "./types";

export const INIT_STATE: LayoutState = {
  layoutMode: "",
};

const Layout = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case LayoutActionTypes.CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload,
      };
    default:
      return { ...state };
  }
};

export default Layout;
