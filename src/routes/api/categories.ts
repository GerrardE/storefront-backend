import express from "express";
import categories from "../../models/categories";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const categoryRouter = express.Router();

categoryRouter.get("/", verifyToken, categories.getAllCategories);
categoryRouter.post("/", verifyToken, trim, categories.create);

export default categoryRouter;
