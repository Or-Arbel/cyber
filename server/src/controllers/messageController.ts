import { Request, Response } from 'express';
import * as messageService from '../services/messageService';
import { AuthRequest } from '../types/index';

export const createMessage = async (req: AuthRequest, res: Response) => {
  try {
    const message = await messageService.createMessage({
      ...req.body,
      sender: req.user!.id
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await messageService.getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};