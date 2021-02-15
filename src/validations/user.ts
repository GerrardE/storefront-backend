import validator from "validator";
import IObjectConstructor from "../interfaces/object";
import IUserPayload from "../interfaces/userpayload";
import isEmpty from "../middlewares/isempty";

const validUser = (data: IUserPayload): IObjectConstructor => {
  const errors: IObjectConstructor = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  // First name validations
  if (!validator.isLength(data.firstName, { min: 2, max: 200 })) {
    errors.firstName = "first name must be between 2 and 100 characters";
  }

  if (isEmpty(data.firstName)) {
    errors.firstName = "first name field is required";
  }

  // Last name validations
  if (!validator.isLength(data.lastName, { min: 2, max: 200 })) {
    errors.lastName = "last name must be between 2 and 100 characters";
  }

  if (isEmpty(data.lastName)) {
    errors.lastName = "last name field is required";
  }

  // Email validations
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password validations
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 to 30 characters";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validUser;
