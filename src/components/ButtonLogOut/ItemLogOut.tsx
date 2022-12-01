import { useCallback, useMemo } from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

export const ItemLogOut = () => {
  const { instance, inProgress } = useMsal();

  const isDisabled = useMemo(() => inProgress === InteractionStatus.Logout, [inProgress]);

  const handleClickLoginRedirect = useCallback(async () => {
    await instance.logoutRedirect();
  }, [instance]);

  return (
    <IonItem className="ion-activatable ion-focusable" disabled={isDisabled} onClick={handleClickLoginRedirect}>
      <IonLabel color="danger">Log Out</IonLabel>
      <IonIcon color="danger" icon={logOutOutline} slot="start" />
    </IonItem>
  );
};
