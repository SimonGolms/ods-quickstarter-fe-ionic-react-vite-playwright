import { IonAvatar, IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import styles from './AvatarIcon.module.css';

export const AvatarIcon = ({ expand, ...rest }: TProps) => {
  return (
    <IonAvatar className={[styles.icon, expand ? styles.expand : ''].join(' ')} {...rest}>
      <IonIcon color="medium" icon={personCircleOutline} />
    </IonAvatar>
  );
};

type TProps = React.ComponentProps<typeof IonAvatar> & {
  expand?: 'full';
};
