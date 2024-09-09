import express from "express";
import { getTeam } from "../controllers/getTeam.js";
import { postTeam } from "../controllers/postTeam.js";
import { getLogin } from "../controllers/getLogin.js";
const TeamRouter = express.Router();

TeamRouter.post("/", postTeam());
TeamRouter.get("/", getTeam);
TeamRouter.get("/login", getLogin);
export { TeamRouter };
