import express from "express";
import { getTeam } from "../controllers/getTeam.js";
import { postTeam } from "../controllers/postTeam.js";
import { getLogin } from "../controllers/getLogin.js";
import { postLogin } from "../controllers/postLogin.js";
import { deleteTeam } from "../controllers/deleteTeam.js";
const TeamRouter = express.Router();

TeamRouter.post("/", postTeam());
TeamRouter.get("/", getTeam);
TeamRouter.delete("/delete/:id", deleteTeam());
TeamRouter.get("/login", getLogin);
TeamRouter.post("/login", postLogin());
export { TeamRouter };
