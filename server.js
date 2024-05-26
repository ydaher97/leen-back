import "dotenv/config";
import express from "express";

import { connection } from "./db.js";
import userRouter from "./routes/userRoute.js";
import workerRouter from "./routes/workerRoute.js";
import itemRouter from "./routes/itemRoute.js";
import orderRouter from "./routes/orderRoute.js";
import orderDetailsRouter from "./routes/orderDetailsRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

connection();

app.use("/api", userRouter);
app.use("/api", workerRouter);
app.use("/api", itemRouter);
app.use("/api", orderRouter);
app.use("/api", orderDetailsRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("connect"));
