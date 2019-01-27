import mongoose from "mongoose";

const Event = new mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    date: Date,
    description: String,
    title: String,
    updatedAt: { type: Date, default: new Date() },
}, { versionKey: false });

export default mongoose.model("events", Event);
