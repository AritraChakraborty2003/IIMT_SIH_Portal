import { teams } from "../Models/team.js";

const deleteTeam = () => {
  return (req, res) => {
    const { teamName, teamLeader } = req.query;

    teams
      .deleteOne({ teamName: teamName, teamLeader: teamLeader })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export { deleteTeam };
