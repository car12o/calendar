import mongoose from "mongoose";

const User = new mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    password: String,
    updatedAt: { type: Date, default: new Date() },
    username: { type: String, unique: true },
});

export default mongoose.model("users", User);
