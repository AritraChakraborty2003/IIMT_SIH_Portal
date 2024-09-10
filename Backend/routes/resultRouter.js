import express from "express";
import { getResults } from "../controllers/getResults.js";
import { postResults } from "../controllers/postResults.js";
import multer from "multer";
import fs from "fs";

const resultRouter = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

resultRouter.get("/", getResults);
resultRouter.post("/", upload.single("image"), postResults());
export { resultRouter };
