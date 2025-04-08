import { format, eachDayOfInterval } from 'date-fns';
import Event from '../models/Event';
import { IEvent, GroupedEvents } from '../types/index';

export const createEvent = (eventData: Partial<IEvent>) => {
  const event = new Event(eventData);
  return event.save();
};

export const getEvents = async (): Promise<GroupedEvents> => {
  const events = await Event.find().sort({ startDateTime: 1 });
  const groupedEvents: GroupedEvents = {};

  events.forEach(event => {
    const dateRange = eachDayOfInterval({
      start: event.startDateTime,
      end: event.endDateTime
    });

    dateRange.forEach(date => {
      const formattedDate = format(date, 'MMMM d');
      if (!groupedEvents[formattedDate]) {
        groupedEvents[formattedDate] = [];
      }
      groupedEvents[formattedDate].push(event);
    });
  });

  return groupedEvents;
};

export const updateEvent = (id: string, eventData: Partial<IEvent>) => {
  return Event.findByIdAndUpdate(id, eventData, { new: true });
};

export const deleteEvent = (id: string) => {
  return Event.findByIdAndDelete(id);
};