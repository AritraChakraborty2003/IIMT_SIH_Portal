import { dumps } from "../Models/dump.js";

const getDumps = (req, res) => {
  dumps
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getDumps };
