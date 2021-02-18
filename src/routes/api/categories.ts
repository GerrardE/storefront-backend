import express from "express";
import categories from "../../models/categories";
import trim from "../../middlewares/trim";
import { verifyToken } from "../../middlewares/token";

const categoryRouter = express.Router();

categoryRouter.get("/", verifyToken, categories.getAllCategories);
categoryRouter.post("/", verifyToken, trim, categories.create);
categoryRouter.put("/:categoryid", verifyToken, categories.updateCategory);
categoryRouter.delete("/:categoryid", verifyToken, categories.deleteCategory);

export default categoryRouter;
