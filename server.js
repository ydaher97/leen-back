import "dotenv/config";
import express from "express";

import { connection } from "./db.js";
import userRouter from "./routes/userRoute.js";
import workerRouter from "./routes/workerRoute.js";
import itemRouter from "./routes/itemRoute.js";
import orderRouter from "./routes/orderRoute.js";
import receiptRouter from "./routes/receiptRoute.js";
import deliveryRouter from "./routes/deliveryRoute.js";
import invoiceRouter from "./routes/invoiceRoute.js";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

connection();

app.use("/api", userRouter);
app.use("/api", workerRouter);
app.use("/api", itemRouter);
app.use("/api", orderRouter);
app.use("/api", receiptRouter);
app.use("/api", deliveryRouter);
app.use("/api", invoiceRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("connect"));
