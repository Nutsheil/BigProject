import { FC, useMemo, useState } from 'react';
import { IThemeContext, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const ThemeContextProps = useMemo<IThemeContext>(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={ThemeContextProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
