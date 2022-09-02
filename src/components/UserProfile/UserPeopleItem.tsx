import { getErrorStatus, getIdPayloadOrSkipToken } from '../../services/api.utils';
import { useGetUserPeopleByIdQuery } from '../../services/microsoft-graph/api.users';
import { ItemAvatarSkeleton } from '../Base/Item/ItemAvatarSkeleton';
import { MessagePermissionsRequiredItem } from '../Message/MessagePermissionsRequiredItem';
import { UserContactItem } from './UserContactItem';

export const UserPeopleItem = ({ id }: TProps) => {
  const { data = [], isFetching, error } = useGetUserPeopleByIdQuery(getIdPayloadOrSkipToken(id));

  if (isFetching) {
    return <ItemAvatarSkeleton lines="none" numberOfLines={2} />;
  }

  if (getErrorStatus(error) === 403) {
    return (
      <MessagePermissionsRequiredItem class="ion-margin">
        One of the following permissions is required to receive the corresponding data from Microsoft Graph:{' '}
        <i>People.Read, People.Read.All</i>
      </MessagePermissionsRequiredItem>
    );
  }

  return (
    <>
      {data.map((people) => (
        <UserContactItem key={people.id} data={people} />
      ))}
    </>
  );
};

type TProps = {
  id?: string | null;
};
