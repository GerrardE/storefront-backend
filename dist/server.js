"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var debug_1 = __importDefault(require("debug"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = require("dotenv");
var cors_1 = __importDefault(require("cors"));
var api_1 = __importDefault(require("./routes/api"));
var app = express_1.default();
var port = process.env.PORT || 3000;
var address = "0.0.0.0:" + port;
var debugged = debug_1.default("server");
dotenv_1.config();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use("/api/v1", api_1.default);
app.listen(port, function () {
    debugged("starting app on: " + address);
    console.log("starting app on: " + address);
});
