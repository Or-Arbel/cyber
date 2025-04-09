import { Request, Response } from 'express';
import * as eventService from '../services/eventService';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.deleteEvent(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};