import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: "Worker" },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  paymentType: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  certification: { type: String },
  bank: { type: String },
  branch: { type: String },
  account: { type: String },
});

const Receipt = mongoose.model("Receipt", receiptSchema);

export default Receipt;
