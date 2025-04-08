import Message from '../models/Message';
import { IMessage, CreateMessageDto } from '../types/index';

export const createMessage = (messageData: CreateMessageDto): Promise<IMessage> => {
  const message = new Message(messageData);
  return message.save();
};

export const getMessages = (): Promise<IMessage[]> => {
  return Message.find()
    .populate('sender', 'firstName lastName')
    .sort({ timestamp: -1 })
    .limit(50)
    .exec();
};