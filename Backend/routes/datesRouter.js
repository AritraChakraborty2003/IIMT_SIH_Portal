import express from "express";
import { getDates } from "../controllers/getDates.js";
import { postDates } from "../controllers/postDates.js";

const datesRouter = express.Router();
datesRouter.get("/", getDates);
datesRouter.post("/", postDates());

export { datesRouter };
