import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  getOrdersByCustomerId,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", createOrder);
router.get("/orders", getOrders);
router.get("/orders/:id", getOrderById);
router.get("/orders/customer/:customerId", getOrdersByCustomerId);

export default router;
