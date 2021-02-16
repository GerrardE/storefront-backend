import express from "express";
import categoryRouter from "./categories";
import orderRouter from "./orders";
import productRouter from "./products";
import userRouter from "./users";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.status(200).send("Welcome to the Store-Front API"));

apiRouter.use("/users", userRouter);
apiRouter.use("/categories", categoryRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/orders", orderRouter);

export default apiRouter;
