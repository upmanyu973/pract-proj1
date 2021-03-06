import { TYPES } from "../types/types";

export const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
      break;

    case TYPES.SIGNUP_SUCCESS:
      return { ...state, ...payload.user };

    case TYPES.CLEAR_STORE:
      return {};

    default:
      return state;
  }
};
