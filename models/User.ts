import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name cannot be more than 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide a Email"],
  },
  pass: {
    required: [true, "Please provide a password"],
    type: String,
    minlength: [6, "Password cannot be less than 6 characters"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
