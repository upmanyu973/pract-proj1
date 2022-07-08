import { POST } from "../../../axios/Axios";
import { EndPoints } from "../../../axios/Endpoints";
import { loginError, loginRequest, loginSuccess } from "./loginActions";

export const clearError = () => async (dispatch) => {
  dispatch(loginError(""));
};

export const userLogin = (data, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { endpoint } = EndPoints.login;
    const Status = await POST(endpoint, data);
    const { res, error } = Status;
    if (res) {
      callback();
      dispatch(loginSuccess(res.data.user));
    } else {
      dispatch(loginError(error.message));
    }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

// export const Logout = () =>{
//   try {
//     dispatch()
//   } final () {

//   }
// }
