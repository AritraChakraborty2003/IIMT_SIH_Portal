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
export { getSelect };
