import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { IThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IThemeProvider {
  initialTheme?: Theme;
}

const ThemeProvider: FC<IThemeProvider> = props => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
