import { IonList, IonListHeader } from '@ionic/react';
import { UserInformation } from './UserInformation';
import { UserInformationOverview } from './UserInformationOverview';

export const UserInformations = ({ id }: TProps) => {
  return (
    <IonList>
      <IonListHeader>Information</IonListHeader>
      <UserInformation id={id} />
      <UserInformationOverview id={id} />
    </IonList>
  );
};

type TProps = {
  id?: string | null;
};
