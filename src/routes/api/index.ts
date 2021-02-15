import express from "express";
import categoryRouter from "./categories";
import userRouter from "./users";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.status(200).send("Welcome to the Store-Front API"));

apiRouter.use("/users", userRouter);
apiRouter.use("/categories", categoryRouter);

export default apiRouter;
