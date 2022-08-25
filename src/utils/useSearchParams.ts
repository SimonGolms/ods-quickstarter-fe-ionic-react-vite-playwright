import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';

export const useSearchParams = () => {
  const { search } = useLocation();
  const history = useHistory();

  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
  const setSearchParams = useCallback(
    (newSearchParams: Record<string, string>, method: 'push' | 'replace' = 'push') => {
      if (method === 'push') {
        history.push({ search: new URLSearchParams(newSearchParams).toString() });
      }
      if (method === 'replace') {
        history.replace({ search: new URLSearchParams(newSearchParams).toString() });
      }
    },
    [history]
  );

  return { searchParams, setSearchParams };
};
