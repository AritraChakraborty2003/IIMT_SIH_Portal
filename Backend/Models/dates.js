import mongoose from "mongoose";

const dateSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "dates",
  }
);

const dates = mongoose.model("dates", dateSchema);
export { dates };
