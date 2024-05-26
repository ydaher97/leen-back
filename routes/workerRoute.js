import express from "express";
import {
  createWorker,
  getWorkers,
  getWorkerById,
} from "../controllers/workerController.js";

const router = express.Router();

router.post("/workers", createWorker);
router.get("/workers", getWorkers);
router.get("/workers/:id", getWorkerById);

export default router;
