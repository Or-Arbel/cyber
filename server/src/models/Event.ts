import { model, Schema, Document } from 'mongoose';
export interface IEvent extends Document {
  startDateTime: Date;
  endDateTime: Date;
  allDay: boolean;
  location: string;
  title: string;
  description?: string;
}

const eventSchema = new Schema<IEvent>({
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  allDay: {
    type: Boolean,
    default: false,
    required: true,
  },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
});

export default model<IEvent>('Event', eventSchema);
