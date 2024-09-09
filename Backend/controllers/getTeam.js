import { teams } from "../Models/team.js";
const getTeam = (req, res) => {
  teams
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getTeam };
