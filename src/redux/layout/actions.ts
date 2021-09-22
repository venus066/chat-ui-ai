import { LayoutActionTypes } from "./types";

export const changeMode = (layoutMode: any) => ({
  type: LayoutActionTypes.CHANGE_THEME_COLOR,
  payload: layoutMode,
});
