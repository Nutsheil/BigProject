import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme,
}

export const Button: FC<IButton> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
