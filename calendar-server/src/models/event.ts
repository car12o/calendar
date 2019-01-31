import mongoose from "mongoose";

const Event = new mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    description: String,
    end: Date,
    start: Date,
    title: String,
    updatedAt: { type: Date, default: new Date() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

export default mongoose.model("events", Event);
