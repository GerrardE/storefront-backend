import validator from "validator";
import IObjectConstructor from "../interfaces/object";
import ICategoryPayload from "../interfaces/categorypayload";
import isEmpty from "../middlewares/isempty";

const validCategory = (data: ICategoryPayload): IObjectConstructor => {
  const errors: IObjectConstructor = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.notes = !isEmpty(data.notes) ? data.notes : "";

  // name validations
  if (!validator.isLength(data.name, { min: 2, max: 200 })) {
    errors.name = "name must be between 2 and 100 characters";
  }

  if (isEmpty(data.name)) {
    errors.name = "name field is required";
  }

  // notes validations
  if (!validator.isLength(data.notes, { min: 2, max: 200 })) {
    errors.notes = "notes must be between 2 and 100 characters";
  }

  if (isEmpty(data.notes)) {
    errors.notes = "notes field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validCategory;
