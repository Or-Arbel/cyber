export interface ICalendarEvent {
  _id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  allDay: boolean;
  description?: string;
}

export const mockCalendarEvents: Record<string, ICalendarEvent[]> = {
  'July 16': [{
    _id: '1',
    title: 'Capture the Flag Exercise',
    startDateTime: '2024-07-16T09:00:00.000Z',
    endDateTime: '2024-07-16T17:00:00.000Z',
    location: 'HFC JFHQ, Ramla',
    allDay: false,
    description: 'Unofficial welcoming cocktail in the evening'
  }],
  'July 17': [{
    _id: '2',
    title: 'Team Briefing',
    startDateTime: '2024-07-17T09:00:00.000Z',
    endDateTime: '2024-07-17T17:00:00.000Z',
    location: 'HFC JFHQ, Ramla',
    allDay: false,
    description: 'Morning briefing and team assignments'
  }],
  'July 18': [{
    _id: '3',
    title: 'Professional Lectures Day',
    startDateTime: '2024-07-18T09:00:00.000Z',
    endDateTime: '2024-07-18T13:30:00.000Z',
    location: 'HFC JFHQ, Ramla',
    allDay: false
  }],
  'July 19': [{
    _id: '4',
    title: 'DAY OFF',
    startDateTime: '2024-07-19T00:00:00.000Z',
    endDateTime: '2024-07-19T23:59:59.999Z',
    location: '',
    allDay: true,
    description: 'NO WORKING DUE TO SHABBAT'
  }],
  'July 20': [{
    _id: '5',
    title: 'OFFICIAL TRAINING OPENING DAY',
    startDateTime: '2024-07-20T08:30:00.000Z',
    endDateTime: '2024-07-20T17:30:00.000Z',
    location: 'Cyberpro, Ramat Gan',
    allDay: false
  }]
};