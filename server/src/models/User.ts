import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    name: string,
    email: string,
    linkedin?: string,
    image?: string,
    unit: string
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkedin: { type: String, unique: true },
    image: { type: String },
    unit: { type: String, required: true },
});

export default model<IUser>("User", userSchema);
