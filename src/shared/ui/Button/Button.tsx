import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
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
  children?: ReactNode;
}

export const Button2 = memo((props: IButton2) => {
  const { className, theme = 'outline', size = 'm', squared, disabled, children, ...otherProps } = props;

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
});
Button2.displayName = 'Button2';

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
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: IButton) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    size = ButtonSize.M,
    squared,
    disabled,
    children,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes.square]: squared,
    [classes[theme]]: true,
    [classes[size]]: true,
    [classes.disabled]: disabled,
  };

  return (
    <button type='button' className={classNames(classes.Button, mods, className)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
