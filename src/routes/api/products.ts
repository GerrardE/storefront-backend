import express from "express";
import products from "../../models/products";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const productRouter = express.Router();

productRouter.get("/:productid", products.getProduct);
productRouter.get("/:categoryid/category", products.getProductByCategory);
productRouter.get("/", products.getAllProducts);
productRouter.post("/", verifyToken, trim, products.create);

export default productRouter;
