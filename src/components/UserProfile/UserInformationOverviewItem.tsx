import { IonIcon, IonItem, IonLabel } from '@ionic/react';

export const UserInformationOverviewItem: React.FC<TProps> = ({ icon, label, value }) => {
  return (
    <IonItem>
      <IonIcon icon={icon} slot="start" />
      <IonLabel>
        <strong className="ion-hide-sm-down">{label}</strong> {value ?? '-'}
      </IonLabel>
    </IonItem>
  );
};

type TProps = Pick<React.ComponentProps<typeof IonIcon>, 'icon'> & {
  label?: string | null;
  value?: React.ReactNode;
};
