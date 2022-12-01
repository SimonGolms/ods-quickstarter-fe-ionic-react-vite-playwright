import { useEffect } from 'react';
import { LoaderPage } from '../Loading/LoaderPage';

export const LogoutPage = () => {
  useEffect(() => {
    const logout = () => {
      // Add your logout logic here, e.g. clean cache, etc

      // Navigate to root page
      // see: https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
      window.location.assign('/');
    };

    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoaderPage />;
};
