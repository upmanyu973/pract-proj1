import { TYPES } from "../types/types";

export const errorReducer = (state = {}, { payload, type }) => {
  if (type === TYPES.CLEAR_STORE) {
    return {};
  }
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

  if (matches) {
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === "ERROR" ? payload.error : null,
    };
  }
  return state;
};
