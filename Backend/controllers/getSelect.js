import { Selects } from "../Models/accept.js";
const getSelect = (req, res) => {
  Selects.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSelectQuery = (req, res) => {
  const teamName = req.query.teamName;
  Selects.find({ teamName })
    .then((response) => {
      if (response.length > 0) return res.status(200).send({ status: true });
      else return res.status(200).send({ status: false });
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getSelect, getSelectQuery };
