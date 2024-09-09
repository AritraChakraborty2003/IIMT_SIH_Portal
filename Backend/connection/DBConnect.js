import mongoose from "mongoose";
const DBConnect = (url) => {
  mongoose.connect(url);
  console.log("MongoDB Connected");
};

export default DBConnect;
