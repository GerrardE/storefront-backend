import express from "express";
import userRouter from "./users";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.status(200).send("Welcome to the Store-Front API"));

apiRouter.use("/users", userRouter);

export default apiRouter;
