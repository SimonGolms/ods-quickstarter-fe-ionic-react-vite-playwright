import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';

export const MessagePermissionsRequiredItem = ({ children, color = 'danger', ...rest }: TProps) => {
  return (
    <IonItem color={color} {...rest}>
      <IonIcon icon={alertCircleOutline} slot="start" />
      <IonLabel className="ion-text-wrap">
        <strong>Permissions Required</strong>
        <p>{children}</p>
      </IonLabel>
    </IonItem>
  );
};

type TProps = React.ComponentProps<typeof IonItem>;
