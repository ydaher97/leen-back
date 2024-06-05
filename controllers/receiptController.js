import Receipt from "../models/receipt.js";

export const saveBulkReceipts = async (req, res) => {
  try {
    const { receipts, workerId, customerId } = req.body;
    const savedReceipts = await Receipt.insertMany(
      receipts.map((receipt) => ({
        ...receipt,
        workerId,
        customerId,
      }))
    );
    res.status(201).json(savedReceipts);
  } catch (error) {
    console.error("Failed to save receipts:", error);
    res.status(500).json({ error: "Failed to save receipts" });
  }
};

export const getReceiptsByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.params;
    const receipts = await Receipt.find({ customerId });
    res.status(200).json(receipts);
  } catch (error) {
    console.error("Failed to fetch receipts:", error);
    res.status(500).json({ error: "Failed to fetch receipts" });
  }
};
