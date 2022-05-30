import { Storage as storage } from '@capacitor/storage';
import { type Storage } from 'redux-persist';

export const capacitorStorage: Storage = {
  getItem: async (key: string) => {
    const { value } = await storage.get({ key });
    return value || '';
  },
  removeItem: async (key: string) => {
    return storage.remove({ key });
  },
  setItem: async (key: string, value: string) => {
    return storage.set({ key, value });
  },
};
