import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import classes from './ThemeSwitcher.module.scss';

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(classes.ThemeSwitcher, {}, className)}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT || theme === Theme.PURPLE ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';
