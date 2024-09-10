import express from "express";
import { getDumps } from "../controllers/getDump.js";
import { postDumps } from "../controllers/postDumps.js";
const DumpsRouter = express.Router();

DumpsRouter.get("/", getDumps);
DumpsRouter.post("/", postDumps());

export { DumpsRouter };
