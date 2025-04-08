import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { IUser } from '../types';

export const useParticipants = () => {
  return useQuery({
    queryKey: ['participants'],
    queryFn: async (): Promise<IUser[]> => {
      const { data } = await api.get('/api/users');
      return data;
    },
  });
};