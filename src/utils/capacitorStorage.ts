import { Preferences } from '@capacitor/preferences';
import { type Storage } from 'redux-persist';

export const capacitorStorage: Storage = {
  getItem: async (key: string) => {
    const { value } = await Preferences.get({ key });
    return value || '';
  },
  removeItem: async (key: string) => {
    return Preferences.remove({ key });
  },
  setItem: async (key: string, value: string) => {
    return Preferences.set({ key, value });
  },
};
