import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
