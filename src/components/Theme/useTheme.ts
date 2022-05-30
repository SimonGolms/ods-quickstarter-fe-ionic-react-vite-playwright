import { useCallback, useEffect, useMemo } from 'react';
import { selectUserThemeId } from '../../data/user/user.selector';
import { setThemeId } from '../../data/user/user.slice';
import { useAppDispatch, useAppSelector } from '../../store';
import { getThemeById, getThemeClasses, THEME_DEFAULT, ThemeId } from './theme.utils';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const themeId = useAppSelector(selectUserThemeId);

  const setTheme = useCallback(
    (themeId: ThemeId) => {
      return dispatch(setThemeId(themeId));
    },
    [dispatch]
  );

  const theme = useMemo(() => getThemeById(themeId) || THEME_DEFAULT, [themeId]);

  useEffect(() => {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    document.body.classList.remove(...(getThemeClasses() as string[]));
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    document.body.classList.add(theme.className as string);
  }, [theme]);

  return useMemo(() => {
    return {
      setTheme,
      theme,
    };
  }, [setTheme, theme]);
};
