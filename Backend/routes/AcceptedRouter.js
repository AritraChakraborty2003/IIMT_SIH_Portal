import express from "express";
import { getSelect } from "../controllers/getSelect.js";
import { postSelect } from "../controllers/postSelect.js";

const AcceptedRouter = express.Router();
AcceptedRouter.get("/", getSelect);
AcceptedRouter.post("/", postSelect());
export { AcceptedRouter };
