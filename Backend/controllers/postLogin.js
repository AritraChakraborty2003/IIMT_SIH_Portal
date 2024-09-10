import { logins } from "../Models/login.js";
const postLogin = () => {
  return (req, res) => {
    const { teamName, password } = req.body;
    //Add your logic here to check username and password in database and return appropriate response
    logins
      .find({ teamName: teamName, password: password })
      .then((obj) => {
        console.log(obj);
        res.status(200).send({ message: "Login successful" });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).send({ message: "Invalid credentials" });
      });
  };
};

export { postLogin };
