import express from "express";
import {
  createDelivery,
  getDelivery,
  getDeliveryById,
  getOrdersByCustomerId,
} from "../controllers/deliveryController.js";

const router = express.Router();

router.post("/delivery", createDelivery);
router.get("/delivery", getDelivery);
router.get("/delivery/:id", getDeliveryById);
router.get("/delivery/customer/:customerId", getOrdersByCustomerId);

export default router;
