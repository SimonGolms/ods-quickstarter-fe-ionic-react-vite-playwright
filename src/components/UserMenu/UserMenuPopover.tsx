import { IonContent, IonPopover } from '@ionic/react';
import { UserMenuList } from './UserMenuList';

export const UserMenuPopover: React.FC<TProps> = (props) => {
  return (
    <IonPopover {...props}>
      <IonContent>
        <UserMenuList />
      </IonContent>
    </IonPopover>
  );
};

type TProps = React.ComponentProps<typeof IonPopover>;
