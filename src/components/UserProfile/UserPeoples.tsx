import { IonList, IonListHeader } from '@ionic/react';
import { UserPeopleItem } from './UserPeopleItem';

export const UserPeoples: React.FC<TProps> = ({ id }) => {
  return (
    <IonList>
      <IonListHeader>Peoples</IonListHeader>
      <UserPeopleItem id={id} />
    </IonList>
  );
};

type TProps = {
  id?: string | null;
};
