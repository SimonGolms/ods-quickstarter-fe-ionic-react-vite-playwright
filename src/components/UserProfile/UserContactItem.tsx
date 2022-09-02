import { IonItem, IonLabel, IonText } from '@ionic/react';
import { User } from '@microsoft/microsoft-graph-types';
import { Avatar } from '../Avatar/Avatar';
import styles from './UserContactItem.module.css';

export const UserContactItem = ({ lines = 'none', data, ...rest }: TProps) => {
  return (
    <IonItem lines={lines} {...rest}>
      <Avatar id={data?.id} slot="start" />
      <IonLabel className="ion-text-wrap">
        <IonText className={data?.mail ? styles.bold : ''}>{data?.displayName}</IonText>
        <p>{data?.mail}</p>
      </IonLabel>
    </IonItem>
  );
};

type TProps = Omit<React.ComponentProps<typeof IonItem>, 'children'> & {
  data: User;
};
