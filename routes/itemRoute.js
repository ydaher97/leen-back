import express from "express";
import {
  createItem,
  getItems,
  getItemById,
} from "../controllers/itemController.js";

const router = express.Router();

router.post("/items", createItem);
router.get("/items", getItems);
router.get("/items/:id", getItemById);

export default router;
