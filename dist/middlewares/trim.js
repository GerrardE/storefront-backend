"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trim = function (req, res, next) {
    var keysArr = Object.keys(req.body);
    req.body = keysArr.reduce(function (obj, key) {
        obj[key] = typeof req.body[key] === 'string'
            ? req.body[key].replace(/ +/g, ' ').trim() : req.body[key];
        return obj;
    }, {});
    next();
};
exports.default = trim;
