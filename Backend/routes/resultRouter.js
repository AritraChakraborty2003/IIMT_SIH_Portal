import express from "express";
import { getResults } from "../controllers/getResults.js";
import { postResults } from "../controllers/postResults.js";
const resultRouter = express.Router();

resultRouter.get("/", getResults);
resultRouter.post("/", postResults());
export { resultRouter };
