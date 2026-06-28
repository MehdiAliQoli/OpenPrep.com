import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  authProvider: { type: String, enum: ["local", "google"], default: "local" },
  picture:{type:string},
  password: { type: String }, // optional now, only for local auth
}, { timestamps: true });

export default mongoose.model("User", userSchema);