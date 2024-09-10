import { dumps } from "../Models/dump.js";
const postDumps = () => {
  return (req, res) => {
    const { teamLeader, teamName, phoneNo } = req.body;

    const dumpsObj = new dumps({
      teamLeader,
      teamName,
      phoneNo,
    });

    dumpsObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postDumps };
