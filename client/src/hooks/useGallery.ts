import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { IGalleryItem } from '../types';

export const useGallery = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: async (): Promise<IGalleryItem[]> => {
      const { data } = await api.get('/api/gallery');
      return data;
    },
  });
};