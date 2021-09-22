import { AuthForgetPassActionTypes, AuthForgetPassState } from "./types";

export const INIT_STATE: AuthForgetPassState = {
  forgetSuccessMsg: null,
  forgetError: null,
};

const ForgetPass = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AuthForgetPassActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AuthForgetPassActionTypes.FORGET_PASSWORD:
          return {
            ...state,
            forgetSuccessMsg: action.payload.data,
            emailSended: true,
            loading: false,
          };
        default:
          return { ...state };
      }

    case AuthForgetPassActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AuthForgetPassActionTypes.FORGET_PASSWORD:
          return {
            ...state,
            forgetError: action.payload.error,
            emailSended: false,
            loading: false,
          };
        default:
          return { ...state };
      }

    case AuthForgetPassActionTypes.FORGET_PASSWORD: {
      return {
        ...state,
        forgetSuccessMsg: null,
        forgetError: null,
        emailSended: false,
        loading: true,
      };
    }
    default:
      return { ...state };
  }
};

export default ForgetPass;
