import type { ButtonHTMLAttributes, FC } from 'react';
import type { Mods } from 'shared/lib/classNames';
import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

type themeType = 'outline' | 'clear' | 'clearInverted' | 'background' | 'backgroundInverted';
type sizeType = 's' | 'm' | 'l' | 'xl';

interface IButton2 extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: themeType;
  size?: sizeType;
  squared?: boolean;
  disabled?: boolean;
}

export const Button2: FC<IButton2> = props => {
  const { className, theme, size = 'm', squared, disabled, children, ...otherProps } = props;

  const mods: Mods = {
    [classes.square]: squared,
    [classes.disabled]: disabled,
  };

  const additionalClasses = [classes[theme], classes[size], className];

  return (
    <button
      type='button'
      className={classNames(classes.Button, mods, additionalClasses)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export enum ButtonTheme {
  OUTLINE = 'outline',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  squared?: boolean;
}

export const Button: FC<IButton> = props => {
  const { className, theme, size = ButtonSize.M, squared, children, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [classes.square]: squared,
    [classes[theme]]: true,
    [classes[size]]: true,
  };

  return (
    <button type='button' className={classNames(classes.Button, mods, className)} {...otherProps}>
      {children}
    </button>
  );
};
