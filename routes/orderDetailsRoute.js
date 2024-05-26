import express from "express";
import {
  createOrderDetails,
  getOrderDetails,
  getOrderDetailsById,
} from "../controllers/orderDetailsController.js";

const router = express.Router();

router.post("/orderdetails", createOrderDetails);
router.get("/orderdetails", getOrderDetails);
router.get("/orderdetails/:id", getOrderDetailsById);

export default router;
