import mongoose from "mongoose";
const resultSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "Results",
  }
);

const Results = mongoose.model("Results", resultSchema);
export { Results };
