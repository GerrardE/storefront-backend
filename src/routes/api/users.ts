import express from "express";
import users from "../../models/users";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const userRouter = express.Router();

userRouter.get("/", verifyToken, users.getAllUsers);
userRouter.get("/:userid", verifyToken, users.getUser);
userRouter.post("/", verifyToken, trim, users.create);

// Since user creation route is protected,
// we need to be able to setup a user for setup and test purposes,
// hence this "user setup" route.
userRouter.post("/setup", trim, users.create);

export default userRouter;
