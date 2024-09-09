import { teams } from "../Models/team.js";
import { logins } from "../Models/login..js";
const postTeam = () => {
  return (req, res) => {
    const {
      teamName,
      teamLeader,
      phoneNo,
      projectCategory,
      projectDepartment,
      projectDetails,
      teamMembers,
    } = req.body;

    const teamsObj = new teams({
      teamName: teamName,
      teamLeader: teamLeader,
      phoneNo: phoneNo,
      projectCategory: projectCategory,
      projectDepartment: projectDepartment,
      projectDetails: projectDetails,
      teamMembers: teamMembers,
    });

    const password = teamName + "_SIH_2024";

    const loginObj = new logins({
      teamName: teamName,
      password: password,
    });
    teamsObj.save();
    loginObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postTeam };
