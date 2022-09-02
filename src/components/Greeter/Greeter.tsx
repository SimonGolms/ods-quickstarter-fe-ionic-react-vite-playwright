import { useGetMeQuery } from '../../services/microsoft-graph/api.me';
import { getGreetingTextByHour } from './Greeter.utils';

// HINT: Using new Date(Date.now()) makes code a lot easier to test.
export const Greeter = ({ hour = new Date(Date.now()).getHours() }: TProps) => {
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
