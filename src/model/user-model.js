import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
