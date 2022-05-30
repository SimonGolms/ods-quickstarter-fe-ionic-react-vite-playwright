import { useGetMeQuery } from '../../services/microsoft-graph/api.me';
import { getGreetingTextByHour } from './Greeter.utils';

export const Greeter: React.FC<TProps> = ({ hour = new Date().getHours() }) => {
  const { data } = useGetMeQuery();
  const greetingText = getGreetingTextByHour(hour);

  return (
    <>
      {greetingText}, {data?.givenName}
    </>
  );
};

type TProps = {
  hour?: number;
};
