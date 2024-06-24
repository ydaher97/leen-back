import express from "express";
import {
  createDelivery,
  getDelivery,
  getDeliveryById,
} from "../controllers/deliveryController.js";

const router = express.Router();

router.post("/delivery", createDelivery);
router.get("/delivery", getDelivery);
router.get("/delivery/:id", getDeliveryById);

export default router;
