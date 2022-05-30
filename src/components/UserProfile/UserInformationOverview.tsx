import { briefcaseOutline, callOutline, idCardOutline, locationOutline, mailOutline, personOutline } from 'ionicons/icons';
import { getErrorStatus, getIdPayloadOrSkipToken } from '../../services/api.utils';
import { useGetUserByIdQuery } from '../../services/microsoft-graph/api.users';
import { ItemAvatarSkeleton } from '../Base/Item/ItemAvatarSkeleton';
import { MessagePermissionsRequiredItem } from '../Message/MessagePermissionsRequiredItem';
import { UserInformationOverviewItem } from './UserInformationOverviewItem';

export const UserInformationOverview: React.FC<TProps> = ({ id }) => {
  const { data = {}, isFetching, error } = useGetUserByIdQuery(getIdPayloadOrSkipToken(id));

  if (isFetching) {
    return (
      <>
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
        <ItemAvatarSkeleton lines="none" numberOfLines={1} />
      </>
    );
  }

  if (getErrorStatus(error) === 403) {
    return (
      <MessagePermissionsRequiredItem class="ion-margin">
        One of the following permissions is required to receive the corresponding data from Microsoft Graph: <i>User.Read</i>
      </MessagePermissionsRequiredItem>
    );
  }

  return (
    <>
      <UserInformationOverviewItem icon={personOutline} label="Given Name:" value={data.givenName} />
      <UserInformationOverviewItem icon={personOutline} label="Surname:" value={data.surname} />
      <UserInformationOverviewItem icon={briefcaseOutline} label="Job Title:" value={data.jobTitle} />
      <UserInformationOverviewItem icon={mailOutline} label="Mail:" value={data.mail} />
      <UserInformationOverviewItem icon={callOutline} label="Phone:" value={data.businessPhones?.[0]} />
      <UserInformationOverviewItem icon={locationOutline} label="Office Location:" value={data.officeLocation} />
      <UserInformationOverviewItem icon={idCardOutline} label="Mail:" value={data.id} />
    </>
  );
};

type TProps = {
  id?: string | null;
};
