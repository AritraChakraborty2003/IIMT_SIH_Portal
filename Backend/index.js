//The modules needed in the project
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import DBConnect from "./connection/DBConnect.js";
import { TeamRouter } from "./routes/TeamRouter.js";
import { generalRouter } from "./routes/generalRouter.js";
import { resultRouter } from "./routes/resultRouter.js";
import { datesRouter } from "./routes/datesRouter.js";
import { AcceptedRouter } from "./routes/AcceptedRouter.js";
import { DumpsRouter } from "./routes/DumpsRouter.js";
//The important config settings...
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("uploads"));
const PORT = process.env.PORT || 3000;

//MongoDB Connection Settings
DBConnect(process.env.MONGODB_URI);

//URL Routes settings:
app.use("/", generalRouter);
app.use("/api/v1/teams", TeamRouter);
app.use("/api/v1/results", resultRouter);
app.use("/api/v1/dates", datesRouter);
app.use("/api/v1/accept", AcceptedRouter);
app.use("/api/v1/dumps", DumpsRouter);

//Express app listen Logic
app.listen(PORT, () => {
  console.log("Bakend Connected");
});
