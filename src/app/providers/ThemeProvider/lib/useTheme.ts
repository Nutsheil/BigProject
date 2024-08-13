import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';
import { Theme, ThemeContext } from './ThemeContext';

interface ITheme {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): ITheme {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error('Theme context error. Using outside provider');

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.PURPLE;
        break;
      case Theme.PURPLE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
