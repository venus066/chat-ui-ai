// constants
import { TABS } from "../../constants/index";

import { LayoutActionTypes, LayoutState } from "./types";

export const INIT_STATE: LayoutState = {
  activeTab: TABS.BOOKMARK,
};

const Layout = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case LayoutActionTypes.CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return { ...state };
  }
};

export default Layout;
