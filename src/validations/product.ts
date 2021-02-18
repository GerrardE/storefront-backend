import validator from "validator";
import IObjectConstructor from "../interfaces/object";
import isEmpty from "../middlewares/isempty";
import IProductPayload from "../interfaces/productpayload";

const validProduct = (data: IProductPayload): IObjectConstructor => {
  const errors: IObjectConstructor = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.categoryid = !isEmpty(data.categoryid) ? data.categoryid : "";

  // name validations
  if (!validator.isLength(data.name, { min: 2, max: 200 })) {
    errors.name = "name must be between 2 and 100 characters";
  }

  if (isEmpty(data.name)) {
    errors.name = "name field is required";
  }

  // price validations
  if (isEmpty(data.price)) {
    errors.price = "price field is required";
  }

  // categoryid validations
  if (isEmpty(data.categoryid)) {
    errors.categoryid = "categoryid is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validProduct;
