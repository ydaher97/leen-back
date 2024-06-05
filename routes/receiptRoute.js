import express from "express";
import {
  saveBulkReceipts,
  getReceiptsByCustomerId,
} from "../controllers/receiptController.js";
const router = express.Router();

router.post("/receipt/bulk", saveBulkReceipts);
router.get("/receipt/:customerId", getReceiptsByCustomerId);

export default router;
