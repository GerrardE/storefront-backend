"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class ResponseModel
 */
var ResponseModel = /** @class */ (function () {
    function ResponseModel() {
    }
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
    ResponseModel.success = function (res, code, status, payload, message) {
        if (code === void 0) { code = 200; }
        if (status === void 0) { status = 200; }
        if (payload === void 0) { payload = {}; }
        if (message === void 0) { message = 'Successful'; }
        return res.status(code).json({
            status: status,
            message: message,
            payload: payload,
        });
    };
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
    ResponseModel.error = function (res, code, status, errors, message) {
        if (code === void 0) { code = 200; }
        if (status === void 0) { status = 200; }
        if (errors === void 0) { errors = {}; }
        if (message === void 0) { message = 'Validation Error'; }
        return res.status(code).json({
            status: status,
            message: message,
            errors: errors,
        });
    };
    return ResponseModel;
}());
exports.default = ResponseModel;
