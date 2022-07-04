export const Validation = {
  mailformat:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

export const validator = (key, value) => {
  switch (key) {
    case "email":
      return value.match(Validation.mailformat);
    case "password":
      return value.length > 8;

    default:
      return true;
  }
};
