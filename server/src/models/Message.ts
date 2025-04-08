import mongoose, { Schema, Document } from 'mongoose';
import { IMessage } from '../types/index';

const messageSchema = new Schema<IMessage>({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IMessage>('Message', messageSchema);