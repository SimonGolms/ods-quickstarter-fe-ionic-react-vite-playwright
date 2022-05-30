import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { AvatarButtonDialog } from '../../components/Avatar/AvatarButtonDialog';
import { UserMenuPopover } from '../../components/UserMenu/UserMenuPopover';

export const RootPageLayout: React.FC<TProps> = ({ children, className, color, title }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={color}>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <AvatarButtonDialog expand="full" id="simon.golms@boehringer-ingelheim.com">
              <UserMenuPopover />
            </AvatarButtonDialog>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={className}>{children}</IonContent>
    </IonPage>
  );
};

type TProps = {
  children: React.ReactNode;
  className?: string;
  color?: HTMLIonToolbarElement['color'];
  title?: string;
};
