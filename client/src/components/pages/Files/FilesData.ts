export interface IFile {
  _id: string;
  title: string;
  category: string;
  description: string;
  fileCount: number;
  lastUpdated: string;
}

export const mockFiles: IFile[] = [
  {
    _id: '1',
    title: 'Training Materials',
    category: 'Documentation',
    description: 'Essential training documents and guides',
    fileCount: 12,
    lastUpdated: '2024-07-15T08:00:00.000Z'
  },
  {
    _id: '2',
    title: 'Technical Guides',
    category: 'Documentation',
    description: 'Detailed technical documentation and procedures',
    fileCount: 8,
    lastUpdated: '2024-07-14T15:30:00.000Z'
  },
  {
    _id: '3',
    title: 'Event Information',
    category: 'Events',
    description: 'Schedules, locations, and event details',
    fileCount: 5,
    lastUpdated: '2024-07-13T11:45:00.000Z'
  },
  {
    _id: '4',
    title: 'Exercise Materials',
    category: 'Training',
    description: 'CTF challenges and exercise resources',
    fileCount: 15,
    lastUpdated: '2024-07-15T09:20:00.000Z'
  }
];