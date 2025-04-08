export interface IChatMessage {
  _id: string;
  sender: {
    _id: string;
    firstName: string;
    lastName: string;
    organization: string;
  };
  content: string;
  timestamp: string;
}

export const mockChatMessages: IChatMessage[] = [
  {
    _id: '1',
    sender: {
      _id: '101',
      firstName: 'Sarah',
      lastName: 'Levy',
      organization: 'Unit 8200'
    },
    content: "Hello everyone! Just a reminder that we'll be meeting at the main entrance at 8:30 AM tomorrow for the CTF exercise.",
    timestamp: '2024-07-15T10:15:00.000Z'
  },
  {
    _id: '2',
    sender: {
      _id: '102',
      firstName: 'David',
      lastName: 'Cohen',
      organization: 'IDF'
    },
    content: "Thanks for the reminder. Should we bring our own ethernet cables?",
    timestamp: '2024-07-15T10:18:00.000Z'
  },
  {
    _id: '3',
    sender: {
      _id: '103',
      firstName: 'Michael',
      lastName: 'Ben-David',
      organization: 'CyberPro'
    },
    content: "Ethernet cables will be provided, but it's always good to bring your own just in case.",
    timestamp: '2024-07-15T10:22:00.000Z'
  },
  {
    _id: '4',
    sender: {
      _id: '104',
      firstName: 'Current',
      lastName: 'User',
      organization: 'Guest'
    },
    content: "Will there be coffee available in the morning?",
    timestamp: '2024-07-15T10:25:00.000Z'
  },
  {
    _id: '5',
    sender: {
      _id: '101',
      firstName: 'Sarah',
      lastName: 'Levy',
      organization: 'Unit 8200'
    },
    content: "Yes, coffee and light refreshments will be available from 8:00 AM.",
    timestamp: '2024-07-15T10:27:00.000Z'
  }
];