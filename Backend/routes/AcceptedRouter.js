import express from "express";
import { getSelect, getSelectQuery } from "../controllers/getSelect.js";

import { postSelect } from "../controllers/postSelect.js";

const AcceptedRouter = express.Router();
AcceptedRouter.get("/", getSelect);
AcceptedRouter.get("/:id", getSelectQuery);
AcceptedRouter.post("/", postSelect());
export { AcceptedRouter };
