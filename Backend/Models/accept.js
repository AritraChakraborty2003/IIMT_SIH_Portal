import mongoose from "mongoose";

const selectSchema = mongoose.Schema(
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
    Collection: "Selects",
  }
);

const Selects = mongoose.model("Selects", selectSchema);
export { Selects };
