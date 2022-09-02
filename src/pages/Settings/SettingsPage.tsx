import { SettingsList } from '../../components/Settings/SettingsList';
import { RootPageLayout } from '../Layout/RootPageLayout';

export const SettingsPage = () => {
  return (
    <RootPageLayout color="primary" title="Settings">
      <SettingsList />
    </RootPageLayout>
  );
};
