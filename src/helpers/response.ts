import { Response } from 'express';

/**
 * @class ResponseModel
 */
class ResponseModel {
  /**
   * @static
   * @param {*} res
   * @param {*} code
   * @param {*} status
   * @param {*} payload
   * @param {*} message
   * @returns {object} object
   * @memberof ResponseModel
   */
  static success(res: Response, code = 200, status = 200, payload = {}, message = 'Successful') {
    return res.status(code).json({
      status,
      message,
      payload,
    });
  }

  /**
   * @static
   * @param {*} res
   * @param {*} code
   * @param {*} status
   * @param {*} errors
   * @param {*} message
   * @returns {object} object
   * @memberof ResponseModel
   */
  static error(res: Response, code = 200, status = 200, errors = {}, message = 'Validation Error') {
    return res.status(code).json({
      status,
      message,
      errors,
    });
  }
}

export default ResponseModel;
