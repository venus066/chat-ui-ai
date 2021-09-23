import { LayoutActionTypes } from "./types";

export const changeTab = (layoutMode: any) => ({
  type: LayoutActionTypes.CHANGE_TAB,
  payload: layoutMode,
});
