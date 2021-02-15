"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
var response_1 = __importDefault(require("../helpers/response"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = process.env.SECRET_KEY;
exports.createToken = (function (payload) { return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '1d' }); });
var verifyToken = function (req, res, next) {
    var token = req.headers.authorization || req.body.token;
    if (!token) {
        return response_1.default.error(res, 403, 403, {}, 'No token supplied');
    }
    if (token) {
        var decoded = void 0;
        try {
            decoded = jsonwebtoken_1.default.verify(token, secret);
        }
        catch (error) {
            return response_1.default.error(res, 401, 401, error, 'Invalid token supplied');
        }
        req.body.decoded = decoded;
        return next();
    }
};
exports.verifyToken = verifyToken;
