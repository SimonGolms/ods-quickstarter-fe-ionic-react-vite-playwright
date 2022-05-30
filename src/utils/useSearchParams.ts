import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const useSearchParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
