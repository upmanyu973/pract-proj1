// Template

import storage from "redux-persist/lib/storage";

// export function header({ media, accessToken, Token }) {
//     let header = {};
//     header["Content-Type"] = !media ? "application/json" : "multipart/form-data";
//     if (accessToken) header["x-access-token"] = Token;
//     return header;
//   }

export const header = async ({ media, accessToken }) => {
  let Token = await storage.getItem("Token");
  let header = {};
  header["Content-Type"] = !media ? "application/json" : "multipart/form-data";
  if (accessToken) header["x-access-token"] = Token;
  return header;
};
