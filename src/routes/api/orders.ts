import express from "express";
import orders from "../../models/orders";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const orderRouter = express.Router();

orderRouter.post("/:user_id", verifyToken, trim, orders.create);
orderRouter.get("/:user_id", verifyToken, trim, orders.getActiveOrders);
orderRouter.get("/:user_id/completed", verifyToken, trim, orders.getCompleteOrders);

export default orderRouter;
