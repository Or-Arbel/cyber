import { Schema, model } from "mongoose";

export interface IStatus {
  name: string;
}

const statusSchema = new Schema<IStatus>(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default model<IStatus>("Status", statusSchema);
