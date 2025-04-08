import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser, CreateUserDto, AuthResponse } from '../types/index';

export const createUser = async (userData: CreateUserDto): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({
    ...userData,
    password: hashedPassword
  });
  return user.save();
};

export const authenticateUser = async (email: string, password: string): Promise<AuthResponse> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid password');

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );

  return { token, user };
};

export const getUsers = (): Promise<IUser[]> => {
  return User.find().select('-password').exec();
};