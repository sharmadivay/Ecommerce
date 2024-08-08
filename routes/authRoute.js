import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  orderStatusController,
  getOrdersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/userMiddleware.js";

//router object
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.get("/test", requireSignIn, testController);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
