// types
import { ChatsActionTypes, ChatsState } from "./types";

export const INIT_STATE: ChatsState = {
  favourites: [],
  directMessages: [],
  channels: []
};

const Chats = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ChatsActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case ChatsActionTypes.GET_FAVOURITES:
          return {
            ...state,
            favourites: action.payload.data,
            isFavouritesFetched: true,
            getFavouritesLoading: false,
          };
        case ChatsActionTypes.GET_DIRECT_MESSAGES:
          return {
            ...state,
            directMessages: action.payload.data,
            isDirectMessagesFetched: true,
            getDirectMessagesLoading: false,
          };
        case ChatsActionTypes.GET_CHANNELS:
          return {
            ...state,
            channels: action.payload.data,
            isChannelsFetched: true,
            getChannelsLoading: false,
          };
        default:
          return { ...state };
      }

    case ChatsActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case ChatsActionTypes.GET_FAVOURITES:
          return {
            ...state,
            isFavouritesFetched: false,
            getFavouritesLoading: false,
          };
        case ChatsActionTypes.GET_DIRECT_MESSAGES:
          return {
            ...state,
            isDirectMessagesFetched: false,
            getDirectMessagesLoading: false,
          };
        case ChatsActionTypes.GET_CHANNELS:
          return {
            ...state,
            isChannelsFetched: false,
            getChannelsLoading: false,
          };
        default:
          return { ...state };
      }

    case ChatsActionTypes.GET_FAVOURITES: {
      return {
        ...state,
        getFavouritesLoading: true,
        isFavouritesFetched: false,
      };
    }
    case ChatsActionTypes.GET_DIRECT_MESSAGES:
      return {
        ...state,
        isDirectMessagesFetched: true,
        getDirectMessagesLoading: false,
      };
    case ChatsActionTypes.GET_CHANNELS:
      return {
        ...state,
        isChannelsFetched: true,
        getChannelsLoading: false,
      };

    default:
      return { ...state };
  }
};

export default Chats;
