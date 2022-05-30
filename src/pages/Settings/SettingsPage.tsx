import { SettingsList } from '../../components/Settings/SettingsList';
import { RootPageLayout } from '../Layout/RootPageLayout';

export const SettingsPage: React.FC = () => {
  return (
    <RootPageLayout color="primary" title="Settings">
      <SettingsList />
    </RootPageLayout>
  );
};
