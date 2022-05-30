export type ThemeId = 'dark' | 'light' | 'system';

type Theme = {
  className: Omit<ThemeId, 'system'>;
  id: ThemeId;
  label: string;
};

export const THEME_DEFAULT: Theme = {
  className: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  id: 'system',
  label: 'System (default)',
};

export const THEMES: Theme[] = [
  {
    className: 'dark',
    id: 'dark',
    label: 'Dark',
  },
  {
    className: 'light',
    id: 'light',
    label: 'Light',
  },
  THEME_DEFAULT,
];

export const getThemeClasses = () => {
  const themeClasses = THEMES.map((theme) => theme.className);
  return [...new Set(themeClasses)];
};

export const getThemeById = (id: ThemeId) => {
  return THEMES.find((theme) => theme.id === id);
};
