import User, { IUser } from "../models/User";

export const getAllUsers = async (): Promise<IUser[]> => {
    return await User.find();
}