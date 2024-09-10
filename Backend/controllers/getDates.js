import { dates } from "../Models/dates.js";
const getDates = (req, res) => {
  dates
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getDates };
