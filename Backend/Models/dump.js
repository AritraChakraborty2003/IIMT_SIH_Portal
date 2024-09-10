import mongoose from "mongoose";

const dumpSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    teamLeader: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "dumps",
  }
);

const dumps = mongoose.model("dumps", dumpSchema);
export { dumps };
