import { IonItem, IonLabel } from '@ionic/react';
import { env } from '../../../config';

export const ItemAppVersion: React.FC<TProps> = (props) => {
  return (
    <IonItem {...props}>
      <IonLabel>Version: {env.REACT_APP_VERSION}</IonLabel>
    </IonItem>
  );
};

type TProps = Omit<React.ComponentProps<typeof IonItem>, 'children'>;
