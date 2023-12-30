const mongoose = require("mongoose");

const Company = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    status: { type: String },
  },
  { collection: "company" },
);

const CompanyModel = mongoose.model("Company", Company);

module.exports = { CompanyModel };
