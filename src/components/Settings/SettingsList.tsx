import { ThemeList } from '../Theme/ThemeList';
import { SettingsApplicationList } from './SettingsApplicationList';

export const SettingsList: React.FC = () => {
  return (
    <>
      <ThemeList />
      <SettingsApplicationList />
    </>
  );
};
