import { STATUS } from "../../utils/constants/status";

const { ERROR, LOADING, NOT_STARTED, SUCCESS } = STATUS;

export const statusSelector = (action, state) => {
  return state.status[action];
};

export const isLoadingSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === LOADING;
  }, true);
};
