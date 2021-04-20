const emailPattern = /^(.+)@(\S+)$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const validators = {
  required: (val) => val && val.length,
  maxLength: (len) => (val) => !val || val.length <= len,
  minLength: (len) => (val) => val && val.length >= len,
  isNumber: (val) => !isNaN(Number(val)),
  validEmail: (val) => emailPattern.test(val),
  validPassword: (val) => passwordPattern.test(val),
};

export const errMsg = {
  required: "Required ",
  minLength: "Must be greater than 2 characters ",
  maxLength: "Must be 20 characters or less ",
  isNumber: "Not a Number ",
  validEmail: "Invalid Email ",
  validPassword:
    "Password must have Minimum eight characters, at least one letter, one number and one special character",
};

export default validators;
