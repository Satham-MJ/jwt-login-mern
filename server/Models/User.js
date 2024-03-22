const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
