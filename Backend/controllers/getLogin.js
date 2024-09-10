import { logins } from "../Models/login.js";

const getLogin = (req, res) => {
  logins
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};
export { getLogin };
