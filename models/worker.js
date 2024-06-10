import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Worker = mongoose.model("Worker", workerSchema);

export default Worker;
