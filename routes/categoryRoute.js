import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/userMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categortController.js";

const router = express.Router();

// create
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//get all
router.get("/get-category", categoryController);
// get single
router.get("/single-category/:slug", singleCategoryController);
//delete
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
