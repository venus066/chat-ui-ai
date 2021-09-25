// constants
import { TABS } from "../../constants/index";

export enum LayoutActionTypes {
  CHANGE_TAB = "@@layout/CHANGE_TAB",
}
export interface LayoutState {
  activeTab:
    | TABS.BOOKMARK
    | TABS.CALLS
    | TABS.CHAT
    | TABS.CONTACTS
    | TABS.SETTINGS
    | TABS.USERS;
}
