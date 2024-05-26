import express from "express";
import {
  createUser,
  getCustomers,
  getCustomerById,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getCustomers);
router.get("/users/:id", getCustomerById);

export default router;
