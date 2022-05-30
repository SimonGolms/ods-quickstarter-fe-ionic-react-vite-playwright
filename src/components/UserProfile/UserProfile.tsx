import { LoaderPage } from '../../pages/Loading/LoaderPage';
import { useGetMeQuery } from '../../services/microsoft-graph/api.me';
import { UserInformations } from './UserInformations';
import { UserManager } from './UserManager';
import { UserPeoples } from './UserPeoples';

export const UserProfile: React.FC = () => {
  const { data = {}, isFetching } = useGetMeQuery();

  if (isFetching) {
    return <LoaderPage />;
  }

  return (
    <>
      <UserInformations id={data.id} />
      <UserManager id={data?.id} />
      <UserPeoples id={data?.id} />
    </>
  );
};
