import { Request } from 'express';

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  organization: string;
  specialty?: string;
  linkedIn?: string;
  whatsApp?: string;
  createdAt: Date;
}

export interface IEvent {
  _id: string;
  title: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  allDay: boolean;
  description?: string;
  createdAt: Date;
}

export interface IMessage {
  _id: string;
  sender: string | IUser;
  content: string;
  timestamp: Date;
}

export interface GroupedEvents {
  [date: string]: IEvent[];
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  organization: string;
  specialty?: string;
  linkedIn?: string;
  whatsApp?: string;
}

export interface CreateMessageDto {
  content: string;
  sender: string;
}

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}