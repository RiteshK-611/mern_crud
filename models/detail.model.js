const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailschema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    qualification: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const detail = mongoose.model("detail", detailschema);

module.exports = detail;
