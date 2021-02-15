"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../../models/users"));
var trim_1 = __importDefault(require("../../middlewares/trim"));
var token_1 = require("../../middlewares/token");
var userRouter = express_1.default.Router();
userRouter.get("/", token_1.verifyToken, users_1.default.getAllUsers);
userRouter.get("/:userid", token_1.verifyToken, users_1.default.getUser);
userRouter.post("/", token_1.verifyToken, trim_1.default, users_1.default.create);
exports.default = userRouter;
