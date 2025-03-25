import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkedin: { type: String, unique: true },
    image: { type: String },
    unit: { type: String, required: true },
});

module.exports = model("User", userSchema);
