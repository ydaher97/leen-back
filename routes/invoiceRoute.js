import express from "express";
import {
  createInvoice,
  getInvoice,
  getInvoiceById,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/invoice", createInvoice);
router.get("/invoice", getInvoice);
router.get("/invoice/:id", getInvoiceById);

export default router;
