import { IonContent, IonPopover } from '@ionic/react';
import type { User } from '@microsoft/microsoft-graph-types';
import { UserMenuList } from './UserMenuList';

export const UserMenuPopover = ({ userData, ...rest }: TProps) => {
  return (
    <IonPopover {...rest}>
      <IonContent>
        <UserMenuList headerTitle={userData?.displayName} />
      </IonContent>
    </IonPopover>
  );
};

type TProps = React.ComponentProps<typeof IonPopover> & {
  userData?: User;
};
