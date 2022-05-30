import { IonButton } from '@ionic/react';
import { Avatar, AvatarProps } from './Avatar';

export const AvatarButton: React.FC<AvatarButtonProps> = ({ id, expand, ...rest }) => {
  return (
    <IonButton shape="round" {...rest}>
      <Avatar expand={expand} id={id} slot="icon-only" />
    </IonButton>
  );
};

export type AvatarButtonProps = AvatarProps & Omit<React.ComponentProps<typeof IonButton>, 'shape'>;
