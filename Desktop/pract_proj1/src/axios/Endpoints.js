export const EndPoints = {
  usernameCheck: {
    endpoint: "users/chkUniqueUser",
  },
  createAccount: {
    endpoint: "users/createAccount",
  },
  fb_createAccount: {
    endpoint: "users/fb",
  },
  google_createAccount: {
    endpoint: "users/google",
  },
  login: {
    endpoint: "users/login",
  },
  uploadProfilePic: {
    endpoint: "users/profileImage",
    header: { accessToken: true, media: true },
  },
  updateUserProfile: {
    endpoint: "users/editUserProfile",
    header: { accessToken: true },
  },
  deleteProfilePic: {
    endpoint: "users/deleteProfileImage/",
    // header: { accessToken: true }
  },
  changepassword: {
    endpoint: "users/resetPassword",
    header: { accessToken: true },
  },
  allFeaturedVideos: {
    endpoint: "videos/allFeaturedVideos",
    header: { accessToken: true },
  },
  uploadVideo: {
    endpoint: "videos/uploadVideo",
    header: { accessToken: true, media: true },
  },
  addVideoDesc: {
    endpoint: "videos/addVideoDesc",
    header: { accessToken: true },
  },
};
