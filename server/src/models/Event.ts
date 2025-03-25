import { model, Schema } from "mongoose";

const eventSchema = new Schema({
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    allDay: {
        type: Boolean, default: false
    },
    location: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String }
});

module.exports = model("Event", eventSchema);
