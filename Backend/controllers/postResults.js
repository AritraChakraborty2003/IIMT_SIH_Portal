import { Results } from "../Models/result.js";
const postResults = () => {
  return (req, res) => {
    const image = req.file.filename;
    const ResultsObj = new Results({
      image: image,
    });

    ResultsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postResults };
