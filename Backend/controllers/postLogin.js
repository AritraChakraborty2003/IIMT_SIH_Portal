import { logins } from "../Models/login.js";
const postLogin = () => {
  return (req, res) => {
    const { teamName, password } = req.body;
    //Add your logic here to check username and password in database and return appropriate response
    logins
      .find({ teamName: teamName, password: password })
      .then((obj) => {
        if (obj.length > 0) {
          res.status(200).send({ message: "Login successful" });
        } else {
          res.status(200).send({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(200).send({ message: "Invalid credentials" });
      });
  };
};

export { postLogin };
