import IObjectConstructor from "../interfaces/object";
import IOrderPayload from "../interfaces/orderpayload";
import isEmpty from "../middlewares/isempty";

const validOrder = (data: IOrderPayload): IObjectConstructor => {
  const errors: IObjectConstructor = {};

  data.productid = !isEmpty(data.productid) ? data.productid : "";
  data.productqty = !isEmpty(data.productqty) ? data.productqty : "";
  data.order_status = !isEmpty(data.order_status) ? data.order_status : "";

  // productid validations
  if (isEmpty(data.productid)) {
    errors.productid = "productid field is required";
  } else if (!Number.isInteger(data.productid)) {
    errors.productid = "productid must be an integer";
  }

  // productqty validations
  if (isEmpty(data.productqty)) {
    errors.productqty = "productqty field is required";
  } else if (!Number.isInteger(data.productqty)) {
    errors.productqty = "productqty must be an integer";
  }

  // order_status validations
  if (isEmpty(data.order_status)) {
    errors.order_status = "order_status field is required";
  } else if (!Number.isInteger(data.order_status)) {
    errors.order_status = "order_status must be an integer";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validOrder;
