// types
import { SettingsActionTypes, SettingsState } from "./types";

export const INIT_STATE: SettingsState = {
  settings: {},
};

const Settings = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case SettingsActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case SettingsActionTypes.GET_USER_SETTINGS:
          return {
            ...state,
            settings: action.payload.data,
            isSettingsFetched: true,
            getSettingsLoading: false,
          };
        default:
          return { ...state };
      }

    case SettingsActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case SettingsActionTypes.GET_USER_SETTINGS:
          return {
            ...state,
            isSettingsFetched: false,
            getSettingsLoading: false,
          };

        default:
          return { ...state };
      }

    case SettingsActionTypes.GET_USER_SETTINGS: {
      return {
        ...state,
        getSettingsLoading: true,
        isSettingsFetched: false,
      };
    }

    default:
      return { ...state };
  }
};

export default Settings;
