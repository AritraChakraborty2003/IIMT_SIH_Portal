import mongoose from "mongoose";
const loginSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "logins",
  }
);

const logins = mongoose.model("login", loginSchema);
export { logins };
