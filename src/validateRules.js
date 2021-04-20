const emailPattern = /^(.+)@(\S+)$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const required = (val) => val && val.length;
export const maxLength = (len) => (val) => !val || val.length <= len;
export const minLength = (len) => (val) => val && val.length >= len;
export const isNumber = (val) => !isNaN(Number(val));
export const validEmail = (val) => emailPattern.test(val);
export const validPassword = (val) => passwordPattern.test(val);

export const errMsg = {
  required: "Required",
  minLength: "Must be greater than 2 characters",
  maxLength: "Must be 20 characters or less",
  isNumber: "Not a Number",
  validEmail: "Invalid Email",
  validPassword:
    "Password must have Minimum eight characters, at least one letter, one number and one special character",
};
