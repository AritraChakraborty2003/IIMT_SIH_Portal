import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      require: true,
    },
    teamLeader: {
      type: String,
      require: true,
    },
    phoneNo: {
      type: String,
      require: true,
    },
    teamMembers: {
      type: String,
      require: "True",
    },
    projctCategory: {
      type: String,
      require: true,
    },
    projectDepartment: {
      type: String,
      require: "True",
    },
    projectDetails: {
      type: String,
      require: "True",
    },
    teamMembers: {
      type: String,
      require: "True",
    },
  },
  {
    Collection: "teams",
  }
);

const teams = mongoose.model("teams", teamSchema);
export { teams };
