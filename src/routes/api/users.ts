import express from "express";
import users from "../../models/users";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const userRouter = express.Router();

userRouter.get("/", verifyToken, users.getAllUsers);
userRouter.get("/:userid", verifyToken, users.getUser);
userRouter.post("/", trim, users.create);

export default userRouter;
