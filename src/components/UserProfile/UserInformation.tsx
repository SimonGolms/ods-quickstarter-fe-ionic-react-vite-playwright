import { getErrorStatus, getIdPayloadOrSkipToken } from '../../services/api.utils';
import { useGetUserByIdQuery } from '../../services/microsoft-graph/api.users';
import { ItemAvatarSkeleton } from '../Base/Item/ItemAvatarSkeleton';
import { MessagePermissionsRequiredItem } from '../Message/MessagePermissionsRequiredItem';
import { UserContactItem } from './UserContactItem';

export const UserInformation: React.FC<TProps> = ({ id }) => {
  const { data = {}, isFetching, error } = useGetUserByIdQuery(getIdPayloadOrSkipToken(id));

  if (isFetching) {
    return <ItemAvatarSkeleton lines="none" numberOfLines={2} />;
  }

  if (getErrorStatus(error) === 403) {
    return (
      <MessagePermissionsRequiredItem class="ion-margin">
        One of the following permissions is required to receive the corresponding data from Microsoft Graph: <i>User.Read</i>
      </MessagePermissionsRequiredItem>
    );
  }

  return <UserContactItem data={data} />;
};

type TProps = {
  id?: string | null;
};
