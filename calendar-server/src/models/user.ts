import mongoose from "mongoose";

const User = new mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    password: String,
    updatedAt: { type: Date, default: new Date() },
    username: String,
}, { versionKey: false });

export default mongoose.model("Users", User);
