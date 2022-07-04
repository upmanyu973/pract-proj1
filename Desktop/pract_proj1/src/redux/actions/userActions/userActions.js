import { loginError, loginRequest, loginSuccess } from "./loginActions";

export const userLogin = (data, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    console.log(data);
    callback();
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
