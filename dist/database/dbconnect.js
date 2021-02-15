"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var connect;
if (process.env.NODE_ENV === "dev") {
    connect = {
        connectionString: process.env.DEV_DATABASE_URL
    };
}
else if (process.env.NODE_ENV === "prod") {
    connect = {
        connectionString: process.env.PROD_DATABASE_URL
    };
}
else {
    connect = {
        connectionString: process.env.TEST_DATABASE_URL
    };
}
var pool = new pg_1.Pool(connect);
pool.on("connect", function () {
    console.log("db connection established");
});
exports.default = pool;
