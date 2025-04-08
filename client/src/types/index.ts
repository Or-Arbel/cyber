export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
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
  sender: IUser;
  content: string;
  timestamp: Date;
}

export interface IGalleryItem {
  _id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  uploader: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  likes: number;
}