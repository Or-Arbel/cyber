import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types/index';

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  specialty: String,
  linkedIn: String,
  whatsApp: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IUser>('User', userSchema);