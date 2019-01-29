import mongoose from "mongoose";

const Event = new mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    description: String,
    end: Date,
    start: Date,
    title: String,
    updatedAt: { type: Date, default: new Date() },
}, { versionKey: false });

export default mongoose.model("events", Event);
