import { combineReducers } from "redux";
import { errorReducer } from "./errorReducers";
import { statusReducer } from "./statusReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  error: errorReducer,
});
