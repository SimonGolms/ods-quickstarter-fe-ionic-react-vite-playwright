import { IonIcon } from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';
import styles from './Message.module.css';

export const MessageAccessSuccess: React.FC<TProps> = ({ children }) => {
  return (
    <div className={[styles.container, styles.success].join(' ')}>
      <IonIcon icon={alertCircleOutline} size="large" />
      <div>
        <strong>Access Success</strong>
        <br />
        {children}
      </div>
    </div>
  );
};

type TProps = {
  children?: React.ReactNode;
};
