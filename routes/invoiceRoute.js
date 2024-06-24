import express from "express";
import {
  createInvoice,
  getInvoice,
  getInvoiceById,
  getOrdersByCustomerId,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/invoice", createInvoice);
router.get("/invoice", getInvoice);
router.get("/invoice/:id", getInvoiceById);
router.get("/invoice/customer/:customerId", getOrdersByCustomerId);

export default router;
