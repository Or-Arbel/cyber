import mongoose, { Schema } from 'mongoose';
import { IEvent } from '../types/index';

const eventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: true
  },
  startDateTime: {
    type: Date,
    required: true
  },
  endDateTime: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  allDay: {
    type: Boolean,
    required: true,
    default: false
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IEvent>('Event', eventSchema);