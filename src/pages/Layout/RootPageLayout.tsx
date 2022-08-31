import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { AvatarButtonDialog } from '../../components/Avatar/AvatarButtonDialog';
import { UserMenuPopover } from '../../components/UserMenu/UserMenuPopover';
import { useGetMeQuery } from '../../services/microsoft-graph/api.me';

export const RootPageLayout = ({ children, className, color, title }: TProps) => {
  const { data } = useGetMeQuery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={color}>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <AvatarButtonDialog expand="full" id={data?.mail || undefined}>
              <UserMenuPopover userData={data} />
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
