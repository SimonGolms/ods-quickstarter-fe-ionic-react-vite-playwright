import { IonLabel, IonList, IonListHeader } from '@ionic/react';
import { ItemAppVersion } from '../Base/Item/ItemAppVersion';
import { ItemResetUserState } from '../ButtonReset/ItemResetUserState';

export const SettingsApplicationList = () => {
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Application</IonLabel>
      </IonListHeader>
      <ItemAppVersion />
      <ItemResetUserState />
    </IonList>
  );
};
