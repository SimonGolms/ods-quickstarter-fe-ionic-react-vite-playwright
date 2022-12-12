import { IonList, IonListHeader } from "@ionic/react";
import { UserManagerItem } from "./UserManagerItem";

export const UserManager = ({ id }: TProps) => {
  return (
    <IonList>
      <IonListHeader>Manager</IonListHeader>
      <UserManagerItem id={id} />
    </IonList>
  );
};

type TProps = {
  id?: string | null;
};
