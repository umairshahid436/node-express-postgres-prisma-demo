import { Router } from "express";
import {
  getCategories,
  addCategory,
  updateCategory,
  getCategoryById,
  deleteCategory,
} from "../controllers/category";

const router = Router();

router.get("/getAll", getCategories);
router.post("/add", addCategory);
router.put("/update", updateCategory);
router.get("/get/:id", getCategoryById);
router.delete("/delete/:id", deleteCategory);

export { router as categoryRoutes };
