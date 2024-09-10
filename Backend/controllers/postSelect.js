import { Selects } from "../Models/accept.js";
const postSelect = () => {
  return (req, res) => {
    const { teamLeader, teamName, phoneNo } = req.body;

    const newSelect = new Selects({
      teamLeader,
      teamName,
      phoneNo,
    });

    newSelect.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postSelect };
