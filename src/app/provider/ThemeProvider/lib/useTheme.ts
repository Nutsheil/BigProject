import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ITheme {
	theme: Theme,
	toggleTheme: () => void;
}

export function useTheme(): ITheme {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error('Theme context error. Using outside provider');

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    const newtTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newtTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newtTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
