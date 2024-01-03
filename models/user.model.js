const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String},
  },
  { collection: "user" },
);

const UserModel = mongoose.model("User", User);

module.exports = { UserModel };
