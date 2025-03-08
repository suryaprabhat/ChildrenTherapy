import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["parent", "admin"], default: "parent" },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
