import { useCallback } from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { persistor } from '../../store';

export const ItemResetUserState: React.FC<TProps> = ({ label = 'Reset', labelColor = 'danger', ...rest }) => {
  const handleClick = useCallback(() => {
    persistor.purge();
  }, []);

  return (
    <IonItem button onClick={handleClick} {...rest}>
      <IonLabel color={labelColor}>{label}</IonLabel>
    </IonItem>
  );
};

type TProps = Omit<React.ComponentProps<typeof IonItem>, 'button' | 'children' | 'onClick'> & {
  label?: string;
  labelColor?: string;
};
