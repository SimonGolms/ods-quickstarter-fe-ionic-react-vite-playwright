import { IonIcon, IonItem, IonLabel, IonList, IonListHeader, isPlatform } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import { ItemLogOut } from '../ButtonLogOut/ItemLogOut';
import styles from './UserMenuList.module.css';

export const UserMenuList: React.FC<TProps> = ({ lines = 'full', ...rest }) => {
  return (
    <IonList class="ion-padding-vertical" lines={lines} {...rest}>
      <IonListHeader className={isPlatform('ios') ? styles['header-ios'] : ''}>Golms,Simon (IT EDS) BIG-DE-B</IonListHeader>
      <IonItem routerDirection="root" routerLink="/settings" type="button">
        <IonLabel>Settings</IonLabel>
        <IonIcon icon={settingsOutline} slot="start" />
      </IonItem>
      <ItemLogOut />
    </IonList>
  );
};

type TProps = React.ComponentProps<typeof IonList>;
