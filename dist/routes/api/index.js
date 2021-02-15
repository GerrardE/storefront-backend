"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./users"));
var apiRouter = express_1.default.Router();
apiRouter.get("/", function (req, res) { return res.status(200).send("Welcome to the Store-Front API"); });
apiRouter.use("/users", users_1.default);
exports.default = apiRouter;
