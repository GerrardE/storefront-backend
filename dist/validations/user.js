"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("validator"));
var isempty_1 = __importDefault(require("../middlewares/isempty"));
var validUser = function (data) {
    var errors = {};
    data.firstName = !isempty_1.default(data.firstName) ? data.firstName : "";
    data.lastName = !isempty_1.default(data.lastName) ? data.lastName : "";
    data.password = !isempty_1.default(data.password) ? data.password : "";
    // First name validations
    if (!validator_1.default.isLength(data.firstName, { min: 2, max: 200 })) {
        errors.firstName = "first name must be between 2 and 100 characters";
    }
    if (isempty_1.default(data.firstName)) {
        errors.firstName = "first name field is required";
    }
    // Last name validations
    if (!validator_1.default.isLength(data.lastName, { min: 2, max: 200 })) {
        errors.lastName = "last name must be between 2 and 100 characters";
    }
    if (isempty_1.default(data.lastName)) {
        errors.lastName = "last name field is required";
    }
    // Password validations
    if (!validator_1.default.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 to 30 characters";
    }
    if (isempty_1.default(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors: errors,
        isValid: isempty_1.default(errors)
    };
};
exports.default = validUser;
