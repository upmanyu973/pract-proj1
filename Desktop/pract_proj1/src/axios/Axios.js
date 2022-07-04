import { header } from "./Headers";

export const GET = async (url, headers, params) => {
  let h = await header({ ...headers });
  var data;
  try {
    await axios
      .get(url, {
        params,
        headers: h,
      })
      .then((res) => {
        data = { res, error: false };
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          navigate("Login");
          // data = {error: error?.response?.data,res : false}
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    data = { error: error?.response?.data, res: false };
  }
};

export const POST = async (url, Body, headers) => {
  var data;
  let h = headers({ ...headers });
  const config = {
    headers: h,
  };

  try {
    const body = JSON.stringify(Body);
    await axios
      .post(url, body, config)
      .then((res) => {
        data = { res, error: false };
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          data = { error: error?.response?.data, res: false };
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    data = { error: error?.response?.data, res: false };
  }
  return data;
};

export const DELETE = async (url, headers, params) => {
  let h = await header({ ...headers });
  var data;

  try {
    await axios
      .delete(url, {
        params,
        headers: h,
      })
      .then((res) => {
        data = { res, error: false };
        // console.log(res);
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          // navigate('Splash');
          // data = { error: error?.response?.data, res: false }
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    data = { error: error?.response?.data, res: false };
  }

  return data;
};
export const PATCH = async (url, Body, headers) => {
  var data;
  let h = await header({ ...headers });
  const config = {
    headers: h,
  };
  console.log({ url, Body, config });
  try {
    const body = JSON.stringify(Body);
    await axios
      .patch(url, body, config)
      .then((res) => {
        data = { res, error: false };
        // console.log(res);
      })
      .catch((error) => {
        console.log(error?.response);
        if (error?.response?.status == 401) {
          // navigate('Splash');
          data = { error: error?.response?.data, res: false };
        } else {
          data = { error: error?.response?.data, res: false };
        }
      });
  } catch (error) {
    console.log(error);
    data = { error: error?.response?.data, res: false };
  }
  return data;
};
