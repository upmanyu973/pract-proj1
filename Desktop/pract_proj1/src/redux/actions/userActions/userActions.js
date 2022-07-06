import { POST } from "../../../axios/Axios";
import { EndPoints } from "../../../axios/Endpoints";
import { loginError, loginRequest, loginSuccess } from "./loginActions";

export const userLogin = (data, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    console.log(data);
    // callback();
    const { endpoint } = EndPoints.login;
    console.log("endpoint", endpoint);
    const Status = await POST(endpoint, data);
    console.log("status", Status);
    const { res, error } = Status;
    if (res) {
      callback();
      console.log(res.data);
      dispatch(loginSuccess(res.data.user));
    } else {
      dispatch(loginError(error.message));
    }
    //api call
    // let someData = await fakeData.user.filter(
    //   (item) => item.email === user.email && item.password === user.password
    // );
    // if (someData[0]) {
    //   dispatch(loginSuccess(someData[0]));
    //   callback();
    // } else {
    //   dispatch(loginError("no user found"));
    // }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
