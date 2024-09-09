import express from "express";
import { generalGet } from "../controllers/generalGet.js";
const generalRouter = express.Router();
generalRouter.get("/", generalGet);

export { generalRouter };
