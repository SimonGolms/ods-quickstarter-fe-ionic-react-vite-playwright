import { IonAvatar } from '@ionic/react';
import { getIdPayloadOrSkipToken } from '../../services/api.utils';
import { useGetUserPhotoByIdQuery } from '../../services/microsoft-graph/api.users';
import styles from './Avatar.module.css';
import { AvatarIcon } from './AvatarIcon';
import { AvatarSkeleton } from './AvatarSkeleton';

export const Avatar: React.FC<AvatarProps> = ({ id, expand, ...rest }) => {
  const { data, isFetching, isError } = useGetUserPhotoByIdQuery(getIdPayloadOrSkipToken(id));

  if (isFetching) {
    return <AvatarSkeleton expand={expand} {...rest} />;
  }

  if (isError || !data) {
    return <AvatarIcon expand={expand} {...rest} />;
  }

  return (
    <IonAvatar className={expand ? styles.expand : ''} {...rest}>
      <img alt={`avatar-${id}`} src={data} />
    </IonAvatar>
  );
};

export type AvatarProps = React.ComponentProps<typeof IonAvatar> & {
  expand?: 'full';
  id?: string | null;
};
