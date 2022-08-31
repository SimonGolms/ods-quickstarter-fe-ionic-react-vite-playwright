import { IonButton } from '@ionic/react';
import { Avatar, AvatarProps } from './Avatar';

export const AvatarButton = ({ id, expand, ...rest }: AvatarButtonProps) => {
  return (
    <IonButton shape="round" {...rest}>
      <Avatar expand={expand} id={id} slot="icon-only" />
    </IonButton>
  );
};

export type AvatarButtonProps = AvatarProps & Omit<React.ComponentProps<typeof IonButton>, 'shape'>;
