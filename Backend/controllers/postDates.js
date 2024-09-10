import { dates } from "../Models/dates.js";
const postDates = () => {
  return (req, res) => {
    const { title, date } = req.body;
    const datesObj = new dates({
      title: title,
      date: date,
    });
    datesObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postDates };
