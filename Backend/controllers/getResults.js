import { Results } from "../Models/result.js";
const getResults = (req, res) => {
  Results.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getResults };
